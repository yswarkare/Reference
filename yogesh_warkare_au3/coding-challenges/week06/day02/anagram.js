string1 = prompt("Enter a string");
string2 = prompt("Enter another string");

var str1 = string1.toLowerCase().split('').sort().join('').trim();
var str2 = string2.toLowerCase().split('').sort().join('').trim();

if (str1 === str2) {
    alert("strings are anagram");
    console.log("strings are anagram");
} else {
    alert("strings are not anagram");
    console.log("strings are not anagram");
}