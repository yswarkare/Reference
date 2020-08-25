/* -------------------------------------------------------------------------- */
/**
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]

Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]

Output: 2
*/
/* -------------------------------------------------------------------------- */

function majorElem(array) {
    let map = {};
    const givenCond = (array.length / 2);
    let result;

    array.forEach(element => {
        if (map[element]) {
            map[element] += 1;
        } else {
            map[element] = 1;
        }
    });

    console.log(map);
    Object.keys(map).forEach((key) => {
        if (map[key] >= givenCond) {
            result = key;
        }
    });

    if (result) {
        return result;
    } else {
        return 'No majority element found';
    }
}

console.log(majorElem([1, 2, 3, 3]));

/* -------------------------------------------------------------------------- */