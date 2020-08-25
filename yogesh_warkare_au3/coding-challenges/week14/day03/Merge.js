function merge(arr1, arr2) {
    let out = [];
    while (arr1.length && arr2.length) {
        let min
        if (arr1[0] < arr2[0]) {
            min = arr1.shift();
        } else {
            min = arr2.shift();
        }
        out.push(min);
    }
    if (arr1.length) {
        out = out.concat(arr1);
    }
    if (arr2.length) {
        out = out.concat(arr2);
    }
    return out;
}

console.log(merge([4, 5, 6, 7], [1, 2, 3]));