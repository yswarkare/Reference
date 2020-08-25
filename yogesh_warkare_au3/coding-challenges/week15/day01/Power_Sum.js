function powerSum(exp) {
    let res = Math.pow(2, exp);
    let sum = 0;
    while (res) {
        let rem = res % 10;
        sum += rem;
        res = (res - rem) / 10;
    }
    return sum;
}

console.log(powerSum(1001));