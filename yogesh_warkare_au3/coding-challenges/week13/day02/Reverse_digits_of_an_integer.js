function reverse(num) {
    let out = 0;
    let sign = Math.sign(num);
    num = sign * num;
    while (num !== 0) {
        let lastDigit = num % 10;
        out = (out * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
    return out * sign;
}
console.log(reverse(-4321));