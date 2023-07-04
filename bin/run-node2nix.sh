#!/usr/bin/env bash
# adapted from https://johns.codes/blog/building-typescript-node-apps-with-nix on 2023-07-03
# You need to re-run this file anytime your package/package-lock.json changes
node2nix --development \
    --input package.json \
    --lock package-lock.json \
    --node-env ./nix/node-env.nix \
    --composition ./nix/default.nix \
    --output ./nix/node-package.nix
