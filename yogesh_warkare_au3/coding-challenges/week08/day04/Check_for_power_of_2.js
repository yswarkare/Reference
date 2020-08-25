function power() {
    number = prompt("enter a number to check if it is power of 2 or not");
    num = Number(number);
    if (num > 1) {
        while (num > 1) {
            num = num / 2;
        }
        if (num == 1) {
            console.log(number + " is a positive power of 2");
        } else {
            console.log(number + " is not a power of 2");
        }
    } else if (num <= (-1)) {
        n = num * (-1);
        while (n > 1) {
            n = n / 2;
        }
        if (n == 1) {
            console.log(number + " is a negative power of 2");
        } else {
            console.log(number + " is not a power of 2");
        }
    }
}

power();