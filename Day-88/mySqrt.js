// Day-80
/*Question:-
write a JavaScript function to capitalize the first letter of a string. Provide an example demonstrating the usage of this function with a given string "dsa questions",
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
