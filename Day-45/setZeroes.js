// Day-45
/*Question:-
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */
/*--- Solution--- */

const setZeroes=(matrix)=> {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowsToZero = new Set();
  const colsToZero = new Set();
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (matrix[i][j] === 0) {
              rowsToZero.add(i);
              colsToZero.add(j);
          }
      }
  }
  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (rowsToZero.has(i) || colsToZero.has(j)) {
              matrix[i][j] = 0;
          }
      }
  }
}
const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(matrix1);
console.log(matrix1); // Output: [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(matrix2);
console.log(matrix2); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
