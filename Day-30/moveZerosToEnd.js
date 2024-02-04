// Day-30
/*Question:- 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

*/
/*--- Solution--- */
function moveZerosToEnd(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
          nonZeroIndex++;
      }
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZerosToEnd(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZerosToEnd(nums2);
console.log(nums2); // Output: [0]
