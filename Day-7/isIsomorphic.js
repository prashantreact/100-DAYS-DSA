// Day-7
/*Question:- 
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 
Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */

/*--- Solution--- */

var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
      
      if (obj1[charS] === undefined) {
          obj1[charS] = charT;
      } else if (obj1[charS] !== charT) {
          return false;
      }

      if (obj2[charT] === undefined) {
          obj2[charT] = charS;
      } else if (obj2[charT] !== charS) {
          return false;
      }
  }

  return true;
}

console.log(isIsomorphic("egg", "add"));    // Output: true
console.log(isIsomorphic("foo", "bar"));    // Output: false
console.log(isIsomorphic("paper", "title"));// Output: true
