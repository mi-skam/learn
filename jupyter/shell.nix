with import <nixpkgs> { };

mkShell {
  buildInputs = with python3Packages; [ 
    mono 
    dotnet-sdk_3 
    # python packages
    odfpy
    jupyter
    jupyterlab
  ];
  shellHook = ''
    export DOTNET_ROOT=${dotnet-sdk_3}
    export PATH="$PATH:/home/plumps/.dotnet/tools"
    dotnet tool install -g dotnet-try || $true
    dotnet try jupyter install || $true
  '';
}
