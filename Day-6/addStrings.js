// Day-6
/*Question:- 
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
 */

/*--- Solution--- */

function addStrings(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  if (len1 < len2) {
    num1 = "0".repeat(len2 - len1) + num1;
  } else {
    num2 = "0".repeat(len1 - len2) + num2;
  }

  const result = [];
  let carry = 0;

  for (let i = num1.length - 1; i >= 0; i--) {
    const digitSum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    result.push(digitSum % 10);
    carry = Math.floor(digitSum / 10);
  }
  if (carry) {
    result.push(carry);
  }
  return result.reverse().join("");
}

console.log(addStrings("11", "123")); // Output: "134"
console.log(addStrings("456", "77")); // Output: "533"
console.log(addStrings("0", "0")); // Output: "0"
