{ pkgs }: {
    deps = [
        pkgs.python39Packages.uvicorn
        pkgs.nodejs-16_x
        pkgs.python310
        pkgs.cowsay
        pkgs.nodejs-16_x.out
    ];
}