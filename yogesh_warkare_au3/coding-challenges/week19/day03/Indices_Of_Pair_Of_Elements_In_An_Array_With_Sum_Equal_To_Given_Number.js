function pairSumIndices(arr, targetSum) {
    var map = [];
    var indices = [];

    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] != null) {
            var index = map[arr[i]];
            indices[0] = index;
            indices[1] = i;
            break;
        } else {
            map[targetSum - arr[i]] = i;
        }
    }
    return indices;
}
console.log(pairSumIndices([1, 2, 3, 4, 6], 6));
console.log(pairSumIndices([2, 5, 9, 11], 11));