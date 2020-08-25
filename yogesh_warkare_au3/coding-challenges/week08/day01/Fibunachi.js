function fibunachi() {
    n = prompt("enter a number");
    fibunachi = [0, 1];
    for (i = 2; i < n; i++) {
        fibunachi[i] = fibunachi[i - 2] + fibunachi[i - 1];
    }
    console.log(fibunachi);
}

fibunachi();