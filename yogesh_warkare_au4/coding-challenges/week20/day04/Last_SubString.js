/* ---------------------------- Length Of Last Maximal Substring --------------------------- */
/* 
Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
return the length of last word in the string.
(last word means the last appearing word if we loop from left to right)
If the last word does not exist, return 0.
Note: A word is defined as a maximal substring consisting of non-space characters only.
Example:

Input: "Hello World"
Output: 5
*/
/* -------------------------------------------------------------------------- */

const lastSubStr = function(str) {
    let arr = str.split(" ");
    var n = str.length;
    arr.pop();
    var str2 = arr.toString();
    var l = str2.length;
    result = str.length - str2.length - 1;

    console.log(arr);
    console.log(str2);
    console.log(result);
}

console.log(lastSubStr("length of last word in the string"));

/* -------------------------------------------------------------------------- */