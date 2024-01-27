// Day-14

/*Question:- 
  The power of the string is the maximum length of a non-empty substring that contains only one unique character.
  Given a string s, return the power of s.

  Example 1:
  Input: s = "leetcode"
  Output: 2
  Explanation: The substring "ee" is of length 2 with the character 'e' only.

  Example 2:
  Input: s = "abbcccddddeeeeedcba"
  Output: 5
  Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
  
  Constraints:

  1 <= s.length <= 500
  s consists of only lowercase English letters.
  */

/*--- Solution--- */

var maxPower = function (s) {
  let maxCount = 1;
  let currentCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 1;
    }
  }
  maxCount = Math.max(maxCount, currentCount);

  return maxCount;
};
console.log(maxPower("leetcode")); // Output: 2
console.log(maxPower("abbcccddddeeeeedcba")); // Output: 5
