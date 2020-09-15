with import <nixpkgs> { };

mkShell {
  name = "python-venv";

  buildInputs = with python3Packages; [
    # enable venv
    venvShellHook
    # your packages
  ];

  venvDir = "venv";
  postShellHook = ''
    # you might install stuff in your venv here
    # pip install num2words
  '';
}
