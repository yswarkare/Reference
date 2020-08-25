/* ------------------------------ Valid Anagram ----------------------------- */
/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
/* -------------------------------------------------------------------------- */


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const map = {};

    for (const char of str1) {
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }

    console.log(map);

    for (const char of str2) {
        if (!(map[char])) {
            return false;
        } else {
            map[char] -= 1;
        }
    }

    console.log(map);
    return true;
}

console.log(isAnagram("anagram", "bnagram"));

/* -------------------------------------------------------------------------- */