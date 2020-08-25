function shiftZero(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element !== 0) {
            array[count] = element;
            count++;
        }
    }
    while (count < array.length) {
        array[count++] = 0;
    }
    return array;
}

console.log(shiftZero([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));