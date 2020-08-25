function binarySearch(array, low, high, item) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === item) return mid;
    if (array[low] <= array[mid]) {
        if (item >= array[low] && item <= array[mid]) {
            return binarySearch(array, low, mid - 1, item);
        } else {
            return binarySearch(array, mid + 1, high, item);
        }
    } else {
        if (item >= array[mid] && item <= array[high]) {
            return binarySearch(array, mid + 1, high, item)
        } else {
            return binarySearch(array, low, mid - 1, item);
        }
    }
}

console.log(binarySearch([3, 4, 5, 1, 2], 0, 4, 1));