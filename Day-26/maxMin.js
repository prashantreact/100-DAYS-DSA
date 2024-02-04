// Day-26
/*Question:- 
Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Examples:
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1,Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3,Maximum element is: 35
*/
/*--- Solution--- */

const  maxMin =(arr)=> {
  const max = arr.reduce((accum, elem) => (accum > elem ? accum : elem))
  const min = arr.reduce((accum, elem) => (accum > elem ? elem : accum))
  return `The max number is ${max} and min is ${min}`
}
console.log(maxMin([ 3, 5, 4, 1, 9]));
console.log(maxMin([22, 14, 8, 17, 35, 3]));
