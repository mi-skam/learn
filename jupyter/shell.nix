{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let pythonEnv = python3.withPackages (ps: [
  ps.jupyter
  ps.jupyterlab
]);

in mkShell {
  nativeBuildInputs = [ mono pythonEnv dotnet-sdk_3 ];
  shellHook = ''
    export DOTNET_ROOT=${dotnet-sdk_3}
    export PATH="$PATH:/home/plumps/.dotnet/tools"
    dotnet tool install -g dotnet-try || $true
    dotnet try jupyter install || $true
  '';
}
