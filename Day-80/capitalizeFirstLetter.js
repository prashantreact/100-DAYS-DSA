// Day-80
/*Question:-
write a JavaScript function to capitalize the first letter of a string. Provide an example demonstrating the usage of this function with a given string "dsa questions",
*/
/*--- Solution--- */

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let str = "dsa questions";
let capitalizedStr = capitalizeFirstLetter(str);
console.log(capitalizedStr); // Output: "Dsa questions"
