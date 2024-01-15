// Day-9
/*Question:- 

 Given a sequence of strings, the task is to find out the second most repeated (or frequent) string in the given sequence. 

Note: No two strings are the second most repeated, there will always be a single string.

Example 1:
Input:
N = 6
arr[] = {aaa, bbb, ccc, bbb, aaa, aaa}
Output: bbb
Explanation: "bbb" is the second most 
occurring string with frequency 2.

Example 2:
Input: 
N = 6
arr[] = {geek, for, geek, for, geek, aaa}
Output: for
Explanation: "for" is the second most
occurring string with frequency 2.

Your Task:
You don't need to read input or print anything. Your task is to complete the function secFrequent() which takes the string array arr[] and its size N as inputs and returns the second most frequent string in the array. If no such string exists, then return an empty string.


Expected Time Complexity: O(N*max(|Si|).
Expected Auxiliary Space: O(N*max(|Si|).

Constraints:
1<=N<=103 */

/*--- Solution--- */

function myFunc(arr, N) {
  const obj = {};

  for (const string of arr) {
    obj[string] = (obj[string] || 0) + 1;
  }

  let mostFrequent = "";
  let secondMostFrequent = "";
  for (const [string, frequency] of Object.entries(obj)) {
    if (frequency > (obj[mostFrequent] || 0)) {
      secondMostFrequent = mostFrequent;
      mostFrequent = string;
    } else if (
      frequency > (obj[secondMostFrequent] || 0) &&
      string !== mostFrequent
    ) {
      secondMostFrequent = string;
    }
  }

  return secondMostFrequent;
}

console.log(myFunc(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"], 6));
// Output: "bbb"
console.log(myFunc(["geek", "for", "geek", "for", "geek", "aaa"], 6));
// Output: "for"
