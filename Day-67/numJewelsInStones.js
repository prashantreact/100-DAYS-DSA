// Day-67
/*Question:-
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

/*--- Solution--- */

const numJewelsInStones=(jewels, stones)=> {
  const jewelSet = new Set(jewels);
  let count = 0;
  for (const stone of stones) {
      if (jewelSet.has(stone)) {
          count++;
      }
  }
  
  return count;
}

// Example:-
console.log(numJewelsInStones("aA", "aAAbbbb")); // Output: 3
console.log(numJewelsInStones("z", "ZZ")); // Output: 0
