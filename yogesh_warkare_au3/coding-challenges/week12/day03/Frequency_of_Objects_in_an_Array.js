function hist(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (map[element] == undefined) {
            map[element] = 1
        } else {
            map[element]++
        }
    }
    return map
};
console.log(hist([2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]));