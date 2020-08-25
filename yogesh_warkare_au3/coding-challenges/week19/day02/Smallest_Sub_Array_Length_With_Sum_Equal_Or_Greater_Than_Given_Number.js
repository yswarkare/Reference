function smallestSub(array, S) {
    let n = array.length;
    let sum = 0;
    let subLen = n + 1;
    let start = 0;
    let end = 0;

    while (end < n) {
        while (sum < S && end < n) {
            sum += array[end++];
        }
        while (sum >= S && start < n) {
            if (end - start < subLen) {
                subLen = end - start;
            }
            sum -= array[start++];
        }
    }
    return subLen > n ? 0 : subLen;
}

console.log(smallestSub([2, 1, 5, 2, 8], 7));