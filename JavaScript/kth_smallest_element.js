/* ----------------- Kth Smallest Element In A Sorted Array ----------------- */

const kthLargeElement = function(arr, k) {
    var sortedArr = [];

    // Sorting an array using compare function
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr);

    // Remove duplicates
    for (let i = 0; i < arr.length; i++) {
        if (sortedArr.indexOf(arr[i]) === -1) {
            sortedArr.push(arr[i]);
        }
    }

    console.log(sortedArr);

    // Return kth element
    var result = sortedArr[k - 1];

    console.log(result);
};

kthLargeElement([3, 2, 3, 1, 2, 0, 4, 5, 5, 6], 5);

/* -------------------------------------------------------------------------- */