// Day-94
/*Question:-
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/
/*--- Solution--- */

const defangIPaddr = (address) => {
  return address.replace(/\./g, "[.]");
};

// Example :
console.log(defangIPaddr("1.1.1.1")); // Output: "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // Output: "255[.]100[.]50[.]0"
