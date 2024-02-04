// Day-27
/*Question:- 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 
Constraints:
0 <= n <= 30
*/
/*--- Solution--- */

function fibonacciNumber(n) {
  if (n === 0) {
      return 0;
  } else if (n === 1) {
      return 1;
  } else {
      let a = 0;
      let b = 1;
      let result = 0;

      for (let i = 2; i <= n; i++) {
          result = a + b;
          a = b;
          b = result;
      }

      return result;
  }
}
const n1 = 2;
console.log(fibonacciNumber(n1)); // Output: 1

const n2 = 3;
console.log(fibonacciNumber(n2)); // Output: 2

const n3 = 4;
console.log(fibonacciNumber(n3)); // Output: 3
