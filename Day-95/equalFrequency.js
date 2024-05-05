// Day-95
/*Question:-
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:
The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot choose to do nothing.
 
Example 1:
Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

Example 2:
Input: word = "aazz"
Output: false
Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.

*/
/*--- Solution--- */

const equalFrequency = (s) => {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    const charCount = {};
    const sCopy = s.slice();
    sCopy.splice(i, 1);
    sCopy.forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
    if (new Set(Object.values(charCount)).size === 1) return true;
  }
  return false;
};

console.log(equalFrequency("abcc")); // true
console.log(equalFrequency("aazz")); //false
