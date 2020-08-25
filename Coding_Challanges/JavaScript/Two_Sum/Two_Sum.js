// Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
    let result = [];
    let nums_02 = [];
    let nums_03 = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === (target/2)) {
            nums_02.push(i);
            if (nums_02.length > 1 && nums_02.length === 2) {
                break;
            }
        } else if (nums.includes(target - nums[i])) {
            nums_03.push(nums.indexOf(nums[i]))
            nums_03.push(nums.indexOf(target - nums[i]));
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

// twoSum([2, 7, 11, 15], 9); //// [0, 1]
// twoSum([3,3], 6); //// [0, 1]
// twoSum([3,2,4], 6); //// [1, 2]
// twoSum([3,2,3], 6); //// [0, 2]
// twoSum([3,2,4,5,1,6,8,9,10,-1], 6)
// twoSum([3,3], 6);