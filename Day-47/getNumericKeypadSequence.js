// Day-47
/*Question:-
Convert a sentence into its equivalent mobile numeric keypad sequence

Given a sentence in the form of a string, convert it into its equivalent mobile numeric keypad sequence. 

Mobile-keypad

Examples : 

Input: GEEKSFORGEEKS
Output: 4333355777733366677743333557777
Explanation: For obtaining a number, we need to press a number corresponding to that character for a number of times equal to the position of the character. For example, for character E, press number 3 two times and accordingly.

Input : HELLO WORLD
Output : 4433555555666096667775553
 */
/*--- Solution--- */

function getNumericKeypadSequence(sentence) {
  const keypadMap = {
      'A': '2', 'B': '22', 'C': '222',
      'D': '3', 'E': '33', 'F': '333',
      'G': '4', 'H': '44', 'I': '444',
      'J': '5', 'K': '55', 'L': '555',
      'M': '6', 'N': '66', 'O': '666',
      'P': '7', 'Q': '77', 'R': '777', 'S': '7777',
      'T': '8', 'U': '88', 'V': '888',
      'W': '9', 'X': '99', 'Y': '999', 'Z': '9999',
      ' ': '0'
  };
  
  let result = '';
  
  for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toUpperCase();
      if (keypadMap[char]) {
          result += keypadMap[char];
      }
  }
  
  return result;
}

// Example:
console.log(getNumericKeypadSequence('GEEKSFORGEEKS')); // Output: 4333355777733366677743333557777
console.log(getNumericKeypadSequence('HELLO WORLD'));   // Output: 4433555555666096667775553
