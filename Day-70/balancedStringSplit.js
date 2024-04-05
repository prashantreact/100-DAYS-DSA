// Day-70
/*Question:-
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:
Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
*/

/*--- Solution--- */

const balancedStringSplit=(s) =>{
  let balance = 0;
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'L') {
          balance++;
      } else if (s[i] === 'R') {
          balance--;
      }
      
      if (balance === 0) {
          count++;
      }
  }
  
  return count;
}

// Example:- 
console.log(balancedStringSplit("RLRRLLRLRL"));  // Output: 4
console.log(balancedStringSplit("RLRRRLLRLL"));  // Output: 2
console.log(balancedStringSplit("LLLLRRRR"));    // Output: 1
