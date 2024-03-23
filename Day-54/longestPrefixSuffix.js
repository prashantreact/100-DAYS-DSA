// Day-54
/*Question:-
Given a string of characters, find the length of the longest proper prefix which is also a proper suffix.
NOTE: Prefix and suffix can be overlapping but they should not be equal to the entire string.

Example 1:
Input: s = "abab"
Output: 2
Explanation: "ab" is the longest proper 
prefix and suffix. 

Example 2:
Input: s = "aaaa"
Output: 3
Explanation: "aaa" is the longest proper 
prefix and suffix. 
Your task:
You do not need to read any input or print anything. The task is to complete the function lps(), which takes a string as input and returns an integer.
 */

/*--- Solution--- */

const lps = (s) => {
  let n = s.length;
  let lpsArray = new Array(n).fill(0);
  let len = 0;
  let i = 1;

  while (i < n) {
    if (s[i] === s[len]) {
      len++;
      lpsArray[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lpsArray[len - 1];
      } else {
        lpsArray[i] = 0;
        i++;
      }
    }
  }

  return lpsArray[n - 1];
};

// Example
console.log(lps("abab")); // Output: 2
console.log(lps("aaaa")); // Output: 3
