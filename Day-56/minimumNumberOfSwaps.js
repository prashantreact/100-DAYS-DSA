// Day-56
/*Question:-
You are given a string S of 2N characters consisting of N ‘[‘ brackets and N ‘]’ brackets. A string is considered balanced if it can be represented in the form S2[S1] where S1 and S2 are balanced strings. We can make an unbalanced string balanced by swapping adjacent characters.
Calculate the minimum number of swaps necessary to make a string balanced.

Note - Strings S1 and S2 can be empty.

Example 1:
Input  : []][][
Output : 2
Explanation :
First swap: Position 3 and 4
[][]][
Second swap: Position 5 and 6
[][][]

Example 2:
Input : [[][]]
Output : 0 
Explanation:
String is already balanced.
 
Your Task:
You don't need to read input or print anything. Your task is to complete the function minimumNumberOfSwaps() which takes the string S and return minimum number of operations required to balance the bracket sequence.
 */
/*--- Solution--- */
const minimumNumberOfSwaps=(S)=> {
  let swaps = 0;
  let stack = [];
  
  for (let i = 0; i < S.length; i++) {
      if (S[i] === '[') {
          stack.push(i);
      } else if (S[i] === ']') {
          if (stack.length === 0) {
              swaps++;
          } else {
              stack.pop();
          }
      }
  }
  return Math.floor(swaps + (stack.length + 1) / 2);
}

// Example
console.log(minimumNumberOfSwaps("[]][][")); // Output: 2
console.log(minimumNumberOfSwaps("[[][]]")); // Output: 0
