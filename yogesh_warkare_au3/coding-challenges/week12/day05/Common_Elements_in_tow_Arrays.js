function common(arr1, arr2) {
    let out = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const element = arr1[i];
            if (arr1[i] == arr2[j]) {
                out.push(element);
            }
        }
    }
    return out;
}

console.log(common([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));