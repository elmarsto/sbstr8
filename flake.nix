{
  # a 2023-07-03 mashup of https://johns.codes/blog/building-typescript-node-apps-with-nix and https://github.com/akirak/flake-templates/tree/master/node-typescript
  description = "sbstr8";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/master";
    flake-utils.url = "github:numtide/flake-utils";
    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    { self
    , nixpkgs
    , flake-utils
    , gitignore
    , ...
    }:
    flake-utils.lib.eachDefaultSystem
      (system:
      let
        nodejs = pkgs.nodejs;
        pkgs = import nixpkgs {
          inherit system;
        };
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
        packages.default = with pkgs; stdenv.mkDerivation {
            name = "sbstr8";
            src = gitignore.lib.gitignoreSource ./.;
            buildInputs = [ nodejs ];
            buildPhase = ''
              runHook preBuild
              ln -sf ${nodeDeps}/lib/node_modules ./node_modules
              export PATH="${nodeDeps}/bin:$PATH"
              npm run build
              runHook postBuild
            '';
            installPhase = ''
              runHook preInstall
              mkdir -p $out/bin
              cp ./bin/sbstr8 $out/bin/sbstr8
              cp -r ./.next $out/.next
              cp -r ./public $out/public
              cp -r ./src $out/src
              ln -sf ${nodeDeps}/lib/node_modules/ $out/node_modules;
              export PATH="${nodeDeps}/bin:$PATH"
              npm run build
              runHook postInstall
            '';
          };
      });
}
