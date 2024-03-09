// Day-40
/*Question:-
Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.

Example 1:
Input:
A[] = {1, 4, 45, 6, 0, 19}
x  =  51
Output: 3
Explanation:
Minimum length subarray is 
{4, 45, 6}

Example 2:
Input:
A[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Explanation:
Minimum length subarray is {10}
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function smallestSubWithSum() which takes the array A[], its size N and an integer X as inputs and returns the required ouput.
*/
/*--- Solution--- */
const smallestSubWithSum = (A, N, x) => {
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < N; right++) {
    sum += A[right];

    while (sum > x) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= A[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

// Example:
const A1 = [1, 4, 45, 6, 0, 19];
const x1 = 51;
console.log(smallestSubWithSum(A1, A1.length, x1)); // Output: 3

const A2 = [1, 10, 5, 2, 7];
const x2 = 9;
console.log(smallestSubWithSum(A2, A2.length, x2)); // Output: 1
