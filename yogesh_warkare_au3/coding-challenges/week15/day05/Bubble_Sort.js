const fs = require('fs');
let data = fs.readFileSync('computers-datafile.csv', 'utf-8').split('\r\n').map(item => item.split(','))
let bubblesort = array => {
    for (let i = 0; i < array.length; i++) {
        for ((j = array.length - 1); j > i; j--) {
            if (array[j][1] > array[j - 1][1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubblesort(data));