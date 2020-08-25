function missingItems(arr) {
    let out = [];
    arr.map((item, index) => {
        if (item + 1 !== arr[index + 1]) out.push(item + 1);
    })
    return out;
}

console.log(missingItems([1, 2, 3, 6, 7, 9, 11, 12, 13, 14, 15]));