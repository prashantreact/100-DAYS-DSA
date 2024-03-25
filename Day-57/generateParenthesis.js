// Day-57
/*Question:-

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 */

/*--- Solution--- */

function generateParenthesis(n) {
  const result = [];
  function generate(str, open, close) {
      if (str.length === 2 * n) {
          result.push(str);
          return;
      }
      if (open < n) {
          generate(str + '(', open + 1, close);
      }
      if (close < open) {
          generate(str + ')', open, close + 1);
      }
  }
  
  generate('', 0, 0);
  
  return result;
}

// Example:-
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]
