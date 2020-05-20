/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them
is that adjacent houses have security system connected and 
it will automatically contact the police if two adjacent 
houses were broken into on the same night.
Given a list of non-negative integers representing the amount of 
money of each house, determine the maximum amount of money you can 
rob tonight without alerting the police.

Input Format : Space separated integers denoting an array

Constraints : None

Output Format : Single Integer output

Sample Input 0 : 1 2 3 1

Sample Output 0 : 4

Explanation 0

Rob house 1 (money = 1) and then rob house 3 (money = 3).

Total amount you can rob = 1 + 3 = 4.

Sample Input 1 : 2 7 9 3 1

Sample Output 1 : 12

Explanation 1

Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). 
Total amount you can rob = 2 + 9 + 1 = 12.
*/

robEveryOtherHouse = (str) => {

    let mArray = str.split(' ').map(function(item) {
        return parseInt(item, 10);
    });
    
    console.log("Given Array => ")
    console.log(mArray)
    let evenArray = [];
    let oddArray = [];
    let evenSum = 0;
    let oddSum = 0
    for (let i = 0; i < mArray.length; i= i+2) {
        oddArray.push(mArray[i]);
        oddSum = oddSum + mArray[i];
    }

    for (let i = 1; i < mArray.length; i= i+2) {
        evenArray.push(mArray[i]);
        evenSum = evenSum + mArray[i];
    }

    console.log("Odd Array =>");
    console.log(oddArray);
    console.log(oddSum);
    console.log("Even Array =>");
    console.log(evenArray);
    console.log(evenSum);

    console.log("Max Money =>")
    if (oddSum > evenSum) {
        console.log(oddSum);
        return oddSum;
    } else {
        console.log(evenSum);
        return evenSum;
    }
}

robEveryOtherHouse ("2 7 9 3 1");