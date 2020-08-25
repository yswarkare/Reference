const move0sToEnd = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
move0sToEnd([0, 1, 2, 3, 12, 0, 6, 4, 0]);