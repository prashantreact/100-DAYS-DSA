// Day-96
/*Question:-
You are given a 0-indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.
Note that the returned array may be in any order.

Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

Example 3:
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

*/
/*--- Solution--- */

const indicesOfWordsContainingX = (words, x) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
};

// Example :-
const words1 = ["leet", "code"];
const x1 = "e";
console.log(indicesOfWordsContainingX(words1, x1)); // Output: [0, 1]

const words2 = ["abc", "bcd", "aaaa", "cbc"];
const x2 = "a";
console.log(indicesOfWordsContainingX(words2, x2)); // Output: [0, 2]

const words3 = ["abc", "bcd", "aaaa", "cbc"];
const x3 = "z";
console.log(indicesOfWordsContainingX(words3, x3)); // Output: []
