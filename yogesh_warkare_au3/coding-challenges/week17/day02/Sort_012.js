function sort012(array) {
    let low = 0;
    let mid = 0;
    let high = array.length - 1;
    while (mid <= high) {
        switch (array[mid]) {
            case 0:
                [array[mid], array[low]] = [array[low], array[mid]];
                low++;
                mid++;
                break;
            case 1:
                mid++
                break;
            case 2:
                [array[mid], array[high]] = [array[high], array[mid]];
                high--;
                break;
        }
    }
    return array;
}

console.log(sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 0, 1]));