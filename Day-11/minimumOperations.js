// Day-11

/*Question:- 
Given two strings A and B, the task is to convert A to B if possible. The only operation allowed is to put any character from A and insert it at front. Find if it’s possible to convert the string. If yes, then output minimum no. of operations required for transformation.

Examples: 

Input:  A = "ABD", B = "BAD"
Output: 1
Explanation: Pick B and insert it at front.

Input:  A = "EACBD", B = "EABCD"
Output: 3
Explanation: Pick B and insert at front, EACBD => BEACD
             Pick A and insert at front, BEACD => ABECD
             Pick E and insert at front, ABECD => EABCD
*/

/*--- Solution--- */

const myFunc = (A, B) => {
  if (A.length !== B.length) {
    return -1;
  }

  let operations = 0;
  let indexA = A.length - 1;
  let indexB = B.length - 1;

  while (indexA >= 0 && indexB >= 0) {
    if (A[indexA] !== B[indexB]) {
      operations++;
      indexA--;
    } else {
      indexA--;
      indexB--;
    }
  }
  return operations;
};

console.log(myFunc("ABD", "BAD")); // Output: 1
console.log(myFunc("EACBD", "EABCD")); // Output: 3
