// Day-53
/*Question:-
227. Basic Calculator II

Given a string s which represents an expression, evaluate this expression and return its value. 
The integer division should truncate toward zero.
You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5
 */

/*--- Solution--- */

const calculate = (s)=> {
  s = s.trim();
  let stack = [];
  let num = 0;
  let sign = '+';
  
  for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i);
      
      if (!isNaN(Number(char)) && char !== ' ') {
          num = num * 10 + parseInt(char);
      }
      
      if (isNaN(Number(char)) || i === s.length - 1) {
          if (sign === '+') {
              stack.push(num);
          } else if (sign === '-') {
              stack.push(-num);
          } else if (sign === '*') {
              stack.push(stack.pop() * num);
          } else if (sign === '/') {
              stack.push(parseInt(stack.pop() / num));
          }
          
          sign = char;
          num = 0;
      }
  }
  
  return stack.reduce((acc, val) => acc + val, 0);
};

// Example:- 
console.log(calculate("3+2*2")); // Output: 7
console.log(calculate(" 3/2 ")); // Output: 1
console.log(calculate(" 3+5 / 2 ")); // Output: 5
