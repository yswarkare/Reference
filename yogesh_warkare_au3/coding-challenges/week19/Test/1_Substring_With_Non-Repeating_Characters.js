function substr(str) {

    let map = {};
    let start = 0;
    let maxLen = 0;
    let arr = str.split('');

    for (i = 0; i < str.length; i++) {
        let current = map[arr[i]];
        if (current != null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        map[arr[i]] = i;
    }
    return maxLen;
};

console.log(substr("aabccbb"));
console.log(substr("abbbb"));
console.log(substr("abccde"));
console.log(substr("bbbbb"));