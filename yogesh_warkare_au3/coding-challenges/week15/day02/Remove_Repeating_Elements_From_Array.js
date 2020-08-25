function getUnique(array) {
    var uniqueArray = [];
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log(getUnique([1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]));