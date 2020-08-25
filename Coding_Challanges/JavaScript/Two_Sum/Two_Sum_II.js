/**Share
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2. */

var twoSum = function(numbers, target) {
    let nums = numbers;
    let result = [];
    let nums_02 = [];
    let nums_03 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === (target/2)) {
            nums_02.push(i+1);
            if (nums_02.length > 1 && nums_02.length === 2) {
                break;
            }
        } else if (nums.includes(target - nums[i])) {
            nums_03.push(nums.indexOf(nums[i])+1)
            nums_03.push(nums.indexOf(target - nums[i])+1);
            if (nums_03.length > 1 && nums_03.length === 2) {
                break;
            }
        }
    }
    if (nums_02.length === 2) {
        result = nums_02;
        console.log(result);
        return result;
    } else {
        result = nums_03;
        console.log(result);
        return result;
    }
};