/ Day-64
/*Question:-
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
*/

/*--- Solution--- */

const duplicateZeros = (arr) => {
  const n = arr.length;
  let zerosToDuplicate = 0;
  for (const num of arr) {
    if (num === 0) {
      zerosToDuplicate++;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i + zerosToDuplicate < n) {
      arr[i + zerosToDuplicate] = arr[i];
    }
    if (arr[i] === 0) {
      zerosToDuplicate--;
      if (i + zerosToDuplicate < n) {
        arr[i + zerosToDuplicate] = 0;
      }
    }
  }
};

// Example:-
const arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1); // Output: [1,0,0,2,3,0,0,4]

const arr2 = [1, 2, 3];
duplicateZeros(arr2);
console.log(arr2); // Output: [1,2,3]
