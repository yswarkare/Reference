const duck = (str) => {
    if (str[0] === '0') return false;
    let num = parseInt(str);
    while (num) {
        let rem = num % 10;
        if (rem === 0) return true;
        num = (num - rem) / 10;
    }
    for (let i = 1; i < str.length; i++) {
        const digit = str[i];
        if (digit === '0') return true;
    }
    return false;
}

console.log(parseInt('1101'));