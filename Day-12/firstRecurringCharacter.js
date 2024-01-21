// Day-12

/*Question:- 
Given a string, return the first recurring character in it, or null if there is no recurring character.
For example, given the string "acbbac", return "b". Given the string "abcdef", return null.
*/

/*--- Solution--- */

function firstRecurringCharacter(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      return char;
    }
    charMap[char] = true;
  }
  return null;
}

console.log(firstRecurringCharacter("acbbac"));  // Output: "b"
console.log(firstRecurringCharacter("abcdef"));  // Output: null
