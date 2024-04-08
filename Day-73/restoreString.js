// Day-73
/*Question:-

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.

Example 1:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Example 2:
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
*/

/*--- Solution--- */

const restoreString = (s, indices) => {
  const shuffled = [];

  for (let i = 0; i < s.length; i++) {
    shuffled[indices[i]] = s[i];
  }

  return shuffled.join("");
};

//Example:-
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // Output: "leetcode"
console.log(restoreString("abc", [0, 1, 2]));
