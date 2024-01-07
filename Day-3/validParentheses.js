// Day-3
/*Question:- 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/*--- Solution--- */

function isValid(s) {
  const arr = [];
  const bracketObj = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let char of s) {
      if (bracketObj[char]) {
          arr.push(bracketObj[char]);
      } else {
          if (char !== arr.pop()) {
              return false;
          }
      }
  }
  return arr.length === 0;
}

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
