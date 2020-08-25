/*
    Given an array with n objects colored red, white or blue, sort them 
    so that objects of the same color are adjacent, with the colors in 
    the order red, white and blue. Here, we will use the integers 0, 1, 
    and 2 to represent the color red, white, and blue respectively.
    Note: You are not suppose to use the library's sort function for this problem.
    Implement using merge sort.
    Example:
    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
*/

const mergeSort = arr => {
    const len = arr.length;
    if (len == 1) { return arr };

    const mid = Math.floor(len / 2);
    let left = arr.splice(0, mid);
    let right = arr;

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (left, right) => {
    const result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right[0]);
            right.splice(0, 1);
        } else {
            result.push(left[0]);
            left.splice(0, 1);
        }
    }

    while (left.length > 0) {
        result.push(left[0]);
        left.splice(0, 1);
    }

    while (right.length > 0) {
        result.push(right[0]);
        right.splice(0, 1);
    }

    return result;
}

mergeSort([5, 7, 2, 4, 1, 3, 6]);