/* 
2) 	Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

	Examples:
	s = "leetcode"
	return 0.
	s = "loveleetcode",
	return 2.

    Note: You may assume the string contain only lowercase letters.
*/

var firstNonRepeatedCharacter = function(str) {
  var chars = str.split('');
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (chars.filter(function(j) { 
            return j == str.charAt(i); 
    }).length == 1)
    arr.push(str.charAt(i)) 
  }
  if(str.indexOf(arr[0]) === -1){
      console.log( -1 );
  } else {
    console.log(str.indexOf(arr[0]));
  }
};

firstNonRepeatedCharacter("leetcode");
firstNonRepeatedCharacter("loveleetcode");
firstNonRepeatedCharacter("loveleetcodeloveleetcode");