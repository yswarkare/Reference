function countAndSay(n) {
    if (n < 1 || n > 30) return "out of range(1-30)";
    let current = "1";
    for (let k = 2; k <= n; k++) {
        let next = "";
        for (let i = 0; i < current.length;) {
            let count = 1;
            while (current[i] == current[i + count]) count++
                next += count + current[i]
            i = i + count
        }
        current = next
    }
    return current
}

console.log(countAndSay(1));
console.log(countAndSay(6));
console.log(countAndSay(66));