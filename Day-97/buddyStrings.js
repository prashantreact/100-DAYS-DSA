// Day-97
/*Question:-
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal
*/
/*--- Solution--- */

const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const set = new Set(s);
    return set.size < s.length;
  }

  const mismatches = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push(i);
    }
  }

  return (
    mismatches.length === 2 &&
    s[mismatches[0]] === goal[mismatches[1]] &&
    s[mismatches[1]] === goal[mismatches[0]]
  );
};

// Example :
console.log(buddyStrings("ab", "ba")); // Output: true
console.log(buddyStrings("ab", "ab")); // Output: false
console.log(buddyStrings("aa", "aa")); // Output: true
