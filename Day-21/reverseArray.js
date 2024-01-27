// Day-21

/*Question:- 

Given an array (or string), the task is to reverse the array/string.

Examples : 
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/

/*--- Solution--- */

function reverseArray(arr) {
  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
}

var arr1 = [1, 2, 3];
reverseArray(arr1);
console.log(arr1); // Output: [3, 2, 1]

var arr2 = [4, 5, 1, 2];
reverseArray(arr2);
console.log(arr2); // Output: [2, 1, 5, 4]
