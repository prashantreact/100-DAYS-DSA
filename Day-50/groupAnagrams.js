// Day-50
/*Question:-
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 */
/*--- Solution--- */

const groupAnagrams=(strs)=> {
  const anagramsMap = new Map(); 
  
  for (let str of strs) {
      const sortedStr = str.split('').sort().join(''); 
      
      if (!anagramsMap.has(sortedStr)) {
          anagramsMap.set(sortedStr, []); 
      }
      
      anagramsMap.get(sortedStr).push(str); 
  }
  
  return Array.from(anagramsMap.values()); 
}

// Example :
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

