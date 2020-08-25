/*
    Given an array with n objects colored red, white or blue, sort them 
    in-place so that objects of the same color are adjacent, with the 
    colors in the order red, white and blue.
    Here, we will use the integers 0, 1, and 2 to represent the color 
    red, white, and blue respectively.
    Note: You are not suppose to use the library's sort function for 
    this problem.
    Example:
    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
*/

const sortColors = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));