// Day-34
/*Question:-
Given an array arr[] of N integers, calculate the median.

NOTE: Return the floor value of the median.
 

Example 1:

Input: N = 5
arr[] = 90 100 78 89 67
Output: 89
Explanation: After sorting the array 
middle element is the median 

Example 2:

Input: N = 4
arr[] = 56 67 30 79
Output: 61
Explanation: In case of even number of 
elements, average of two middle elements 
is the median.

*/
/*--- Solution--- */

function findMedian(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  if (n % 2 !== 0) {
      return arr[Math.floor(n / 2)];
  }
  else {
      const mid1 = arr[n / 2 - 1];
      const mid2 = arr[n / 2];
      return Math.floor((mid1 + mid2) / 2);
  }
}

const arr1 = [90, 100, 78, 89, 67];
console.log(findMedian(arr1)); // Output: 89

const arr2 = [56, 67, 30, 79];
console.log(findMedian(arr2)); // Output: 61
