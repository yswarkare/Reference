function unique(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (map[char] === undefined) {
            map[char] = null;
        } else {
            return false;
        }
    }
    return true;
}

console.log(unique("ansal"));
console.log(unique("arkesh"));