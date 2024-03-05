// Day-36
/*Question:-
Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.

Example 1:
Input:
n = 6, X = 13
arr[] = [1 4 45 6 10 8]
Output: 1
Explanation:
The triplet {1, 4, 8} in 
the array sums up to 13.

Example 2:
Input:
n = 5, X = 10
arr[] = [1 2 4 3 6]
Output:1
Explanation:
The triplet {1, 3, 6} in 
the array sums up to 10.

Your Task:
You don't need to read input or print anything. Your task is to complete the function find3Numbers() which takes the array arr[], the size of the array (n) and the sum (X) as inputs and returns True if there exists a triplet in the array arr[] which sums up to X and False otherwise.
*/
/*--- Solution--- */

const find3Numbers= (arr, n, X)=> {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
          let currentSum = arr[i] + arr[left] + arr[right];
          if (currentSum === X) {
              return true;
          }

          else if (currentSum < X) {
              left++;
          }
          else {
              right--;
          }
      }
  }

  return false;
}

// Example usage:
const arr1 = [1, 4, 45, 6, 10, 8];
const n1 = 6;
const X1 = 13;
console.log(find3Numbers(arr1, n1, X1)); // Output: true

const arr2 = [1, 2, 4, 3, 6];
const n2 = 5;
const X2 = 10;
console.log(find3Numbers(arr2, n2, X2)); // Output: true
