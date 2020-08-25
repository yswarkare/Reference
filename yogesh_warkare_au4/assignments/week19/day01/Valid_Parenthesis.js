/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1: Input: "()"

Output: true

Example 2: Input: "()[]{}"

Output: true

Example 3: Input: "(]"

Output: false

Example 4: Input: "([)]"

Output: false

Example 5: Input: "{[]}"

Output: true
*/

const isValidString = str => {
    if (str == "") { return true }

    const stack = [];

    for (let char of str) {
        if (char === '[') {
            stack.push(']');
        } else if (char === '{') {
            stack.push('}');
        } else if (char === '(') {
            stack.push(')');
        } else if (stack.length === 0 || char !== stack.pop()) {
            return false;
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidString("{[()]}"));