/*=================================================
=                     Palindrome                  =
===================================================*/
/**
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false

Explanation: From left to right, it reads -121. From right to left,
it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false

Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:
Could you solve it without converting the integer to a string?
*/
/* -------------------------------------------------------------------------- */


function isPalindrome(num) {
    var number = num;
    var rev = 0;
    while (number > 0) {
        console.log("start", rev, number)
        rev = rev * 10 + number % 10;
        number = Math.floor(number / 10);
        console.log("end", rev, number);
    }
    return rev === num;
}

console.log(isPalindrome(121));


/*===========================  End of Palindrome  ===========================*/