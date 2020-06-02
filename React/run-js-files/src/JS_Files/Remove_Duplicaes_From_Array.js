/*---------------------- Removes Duplicates From An Array ----------------------*/
/*
Write a Javascript program that removes duplicates from an array.
For example, if the input array is [1, 2, 2, 3, 4, 5, 6, 6, 7],
the output of the program should be [1, 2, 3, 4, 5, 6, 7]
You can assume that the input array is sorted.
(If this fact is not mentioned in your interview challenge,
you can always sort the input array before processing).
Can you do this in O(n) time?
*/
/*------------------------------------------------------------------------------- */

const removeDuplicates = (arr) => {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6, 7]));

export default removeDuplicates;

/* ------------------------------------------------------------------------------- */