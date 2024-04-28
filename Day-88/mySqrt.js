// Day-88
/*Question:-
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/
/*--- Solution--- */

const mySqrt = (x) => {
  if (x === 0 || x === 1) {
    return x; // Square root of 0 or 1 is itself
  }
  let left = 1;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

// Example usage:
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
