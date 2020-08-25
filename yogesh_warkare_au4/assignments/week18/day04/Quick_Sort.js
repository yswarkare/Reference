/*
    Given an array with n objects colored red, white or blue, sort them so that 
    objects of the same color are adjacent, with the colors in the order red, 
    white and blue. Here, we will use the integers 0, 1, and 2 to represent the 
    color red, white, and blue respectively.
    Note: You are not suppose to use the library's sort function for this problem.
    Implement using quick sort.
    Example:
    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]

*/

const quickSort = (arr, left, right) => {
    let pivot;
    let partIndex;
    if (left < right) {
        pivot = right;
        partIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partIndex - 1);
        quickSort(arr, partIndex + 1, right);
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
    let pivotElement = arr[pivot];
    let partIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotElement) {
            swap(arr, i, partIndex);
            partIndex++
        }
    }
    swap(arr, right, partIndex);
    return partIndex;
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
}

const array = [6, 1, 4, 2, 5, 3]
quickSort(array, 0, array.length - 1)