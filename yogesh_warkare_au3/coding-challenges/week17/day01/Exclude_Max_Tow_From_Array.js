function maxTwo(array) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            secondMax = max;
            max = element;
        } else if (element > secondMax) {
            secondMax = element;
        }
    }
    return array.filter(item => item < secondMax);
}

console.log(maxTwo([2, 4, 5, 6, 8, -1, -8]));

console.log(maxTwo([2, 8, 7, 1, 5]));