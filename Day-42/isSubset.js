// Day-42
/*Question:-
 
Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

Example 1:
Input:
a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
a2[] = {11, 3, 7, 1, 7}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 2:
Input:
a1[] = {1, 2, 3, 4, 4, 5, 6}
a2[] = {1, 2, 4}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 3:
Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No
Explanation:
a2[] is not a subset of a1[]
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function isSubset() which takes the array a1[], a2[], its size n and m as inputs and return "Yes" if arr2 is subset of arr1 else return "No" if arr2 is not subset of arr1.
Your Task:  
You don't need to read input or print anything. Your task is to complete the function rotate() which takes the array A[] and its size N as inputs and modify the array in place.
/*--- Solution--- */

const isSubset=(a1, a2, n, m)=> {
    
  const setA1 = new Set(a1);
  const setA2 = new Set(a2);

  for (const element of setA2) {
      if (!setA1.has(element)) {
          return "No";
      }
  }

  return "Yes";
}
// Example :-
const a1 = [11, 7, 1, 13, 21, 3, 7, 3];
const a2 = [11, 3, 7, 1, 7];
console.log(isSubset(a1, a2, a1.length, a2.length)); // Output: Yes

const a3 = [1, 2, 3, 4, 4, 5, 6];
const a4 = [1, 2, 4];
console.log(isSubset(a3, a4, a3.length, a4.length)); // Output: Yes

const a5 = [10, 5, 2, 23, 19];
const a6 = [19, 5, 3];
console.log(isSubset(a5, a6, a5.length, a6.length)); // Output: No
