
// Day-29
/*Question:- 
Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

Example 1:
Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:
Input:
N = 4, K = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1.

Your Task:
 You don't need to read input or print anything. Your task is to complete the function getPairsCount() which takes arr[], n and k as input parameters and returns the number of pairs that have sum K.
*/
/*--- Solution--- */

function getPairsCount(arr, n, k) {
  let count = 0;
  let frequencyMap = {};

  for (let i = 0; i < n; i++) {
      let complement = k - arr[i];

      if (frequencyMap[complement]) {
          count += frequencyMap[complement];
      }

      frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  }

  return count;
}
const arr1 = [1, 5, 7, 1];
const n1 = 4;
const k1 = 6;
console.log(getPairsCount(arr1, n1, k1)); // Output: 2

const arr2 = [1, 1, 1, 1];
const n2 = 4;
const k2 = 2;
console.log(getPairsCount(arr2, n2, k2)); // Output: 6
