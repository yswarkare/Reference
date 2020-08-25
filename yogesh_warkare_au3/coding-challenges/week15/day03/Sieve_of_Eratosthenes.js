function seive(n) {
    let marked = Array(n + 1).fill(false)
    for (let i = 2; i <= n ** .5; i++) {
        const element = marked[i];
        if (element === false) {
            for (let j = i ** 2; j <= n; j = j + i) {
                const element = marked[j];
                marked[j] = true;
            }
        }
    }
    let primes = [];
    for (let k = 2; k <= n; k++) {
        const element = marked[k];
        if (element == false) primes.push(k);
    }
    return primes;
}

console.log(seive(10));