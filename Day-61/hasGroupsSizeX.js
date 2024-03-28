// Day-61
/*Question:-
You are given an integer array deck where deck[i] represents the number written on the ith card.
Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

Example 1:
Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Example 2:
Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 
Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104
  */

/*--- Solution--- */

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function hasGroupsSizeX(deck) {
  const countMap = new Map();
  for (const card of deck) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  let gcdValue = -1;
  for (const count of countMap.values()) {
    if (gcdValue === -1) {
      gcdValue = count;
    } else {
      gcdValue = gcd(gcdValue, count);
    }
  }

  return gcdValue > 1;
}

// Example:-
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // Output: true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // Output: false
