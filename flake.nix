{
  # a 2023-07-03 mashup of https://johns.codes/blog/building-typescript-node-apps-with-nix and https://github.com/akirak/flake-templates/tree/master/node-typescript
  description = "sbstr8";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/master";
    kubenix.url = "github:hall/kubenix";
    flake-utils.url = "github:numtide/flake-utils";
    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    { self
    , nixpkgs
    , kubenix
    , flake-utils
    , gitignore
    , ...
    }:
    flake-utils.lib.eachDefaultSystem
      (system:
      let
        nodejs = pkgs.nodejs;
        pkgs = import nixpkgs { inherit system; };
        node2nixOutput = import ./nix { inherit pkgs nodejs system; };
        nodeDeps = node2nixOutput.nodeDependencies;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            node2nix
            nodePackages.typescript
            nodePackages.typescript-language-server
          ];
        };
        packages = {
          docker = pkgs.dockerTools.buildImage {
            name = "sbstr8";
            config = {
              Cmd = [ "./node_modules/next/dist/bin/next" ];
              WorkingDir = "${self.packages.${system}.default}";
            };
          };
          default = with pkgs; stdenv.mkDerivation {
            name = "sbstr8";
            src = gitignore.lib.gitignoreSource ./.;
            buildInputs = [ nodejs ];
            buildPhase = ''
              runHook preBuild
              ln -sf ${nodeDeps}/lib/node_modules ./node_modules
              npm run build
              runHook postBuild
            '';
            installPhase = ''
              runHook preInstall
              mkdir -p $out/bin
              cp -r ./.next $out/.next
              cp -r ./public $out/public
              cp -r ./src $out/src
              cp -r ${nodeDeps}/lib/node_modules $out/node_modules;
              ln -sf $out/node_modules/next/dist/bin/next $out/bin/sbstr8;
              runHook postInstall
            '';
          };
        };
        apps.default = {
          type = "app";
          program = "${self.packages.${system}.default}/node_modules/next/dist/bin/next";
        };
      });
    }
