// Day-68
/*Question:-
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/

/*--- Solution--- */

const interpret=(command)=> {
  let interpreted = '';
  
  for (let i = 0; i < command.length; i++) {
      if (command[i] === 'G') {
          interpreted += 'G';
      } else if (command[i] === '(' && command[i + 1] === ')') {
          interpreted += 'o';
          i++; 
      } else if (command[i] === '(' && command.slice(i, i + 4) === "(al)") {
          interpreted += 'al';
          i += 3; 
      }
  }
  
  return interpreted;
}

// Example:-
console.log(interpret("G()(al)")); // Output: "Goal"
console.log(interpret("G()()()()(al)")); // Output: "Gooooal"
console.log(interpret("(al)G(al)()()G")); // Output: "alGalooG"
