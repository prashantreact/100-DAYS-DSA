// Day-99
/*Question:-
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 
Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
 
Constraints:
1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104

*/
/*--- Solution--- */

const findClosestElements = (arr, k, x) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let start = Math.max(0, left - k);
  let end = Math.min(arr.length - 1, left + k - 1);

  while (end - start + 1 > k) {
    if (x - arr[start] <= arr[end] - x) {
      end--;
    } else {
      start++;
    }
  }

  return arr.slice(start, end + 1);
};

// Example:-
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // Output: [1,2,3,4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // Output: [1,2,3,4]
