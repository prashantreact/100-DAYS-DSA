// Day-8
/*Question:- 
 Given a string S, the task is to print all the duplicate characters with their occurrences in the given string .

 Example:
 Input: S = “geeksforgeeks”

Output:
e, count = 4
g, count = 2
k, count = 2
s, count = 2
 */

/*--- Solution--- */

let  duplicateChar=(str)=> {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char in charCount) {
    if (charCount[char] > 1) {
      console.log(`${char}, count = ${charCount[char]}`);
    }
  }
}
duplicateChar("geeksforgeeks");
