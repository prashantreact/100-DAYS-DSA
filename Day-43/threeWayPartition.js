// Day-43
/*Question:-
 Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.

Note: The generated output is 1 if you modify the given array successfully.

Example 1:
Input: 
n = 5
A[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 1
Explanation: One possible arrangement is:
{1, 2, 3, 3, 4}. If you return a valid
arrangement, output will be 1.

Example 2:
Input: 
n = 3 
A[] = {1, 4, 3, 6, 2, 1}
[a, b] = [1, 3]
Output: 1
Explanation: One possible arrangement 
is: {1, 3, 2, 1, 4, 6}. If you return a valid
arrangement, output will be 1.

Your Task:

You don't need to read input or print anything. The task is to complete the function threeWayPartition() 
which takes the array[], a, and b as input parameters and modifies the array in-place according to the given conditions.

/*--- Solution--- */
const threeWayPartition=(A, a, b)=> {
  let low = 0;
  let high = A.length - 1;
  let i = 0;

  while (i <= high) {
      if (A[i] < a) {
          [A[i], A[low]] = [A[low], A[i]];
          low++;
          i++;
      } else if (A[i] > b) {
          [A[i], A[high]] = [A[high], A[i]];
          high--;
      } else {
          i++;
      }
  }

  return 1; 
}

// Example :
const A1 = [1, 2, 3, 3, 4];
const [a1, b1] = [1, 2];
console.log(threeWayPartition(A1, a1, b1)); // Output: 1
const A2 = [1, 4, 3, 6, 2, 1];
const [a2, b2] = [1, 3];
console.log(threeWayPartition(A2, a2, b2)); // Output: 1






