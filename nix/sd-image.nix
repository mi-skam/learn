{ config, pkgs, ... }: {

  imports = [
    <nixpkgs/nixos/modules/installer/cd-dvd/sd-image-armv7l-multiplatform.nix>
  ];

  #boot.kernelPackages = pkgs.linuxPackages_4_19;
}
