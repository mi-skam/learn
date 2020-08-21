{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let pythonEnv = python3.withPackages (ps: [
    # ...
    ]);

in mkShell {
  nativeBuildInputs = [ rustup pythonEnv ];
  shellHook = ''
    export PATH="$PATH:/home/plumps/.cargo/bin"
    '';
}
