function trianglePattern() {
    n = prompt("Enter a number");
    line = "";
    for (var row = n; row >= 1; row--) {
        for (var column = 1; column <= n; column++) {
            if (column <= row - 1) {
                line = line + " ";
            } else {
                line = line + "* ";
            }
        }
        line = line + "\n";
    }
    console.log(line);
}

trianglePattern();