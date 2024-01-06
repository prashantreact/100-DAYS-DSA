// Day-2
/*Question:- 

 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once .

 Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false */

/*--- Solution--- */

const checkAnagram = (s,t)=>{
    if(s.length!==t.length){
        return false;
    }
    let obj= {};
    for(char of s){
        obj[char]=(obj[char] || 0)+1
    }
    for(char of t){
       if(!obj[char]){
           return false
       }
       obj[char]--
    }
    return true
}

console.log((checkAnagram)("anagram","nagaram")) //Output : true
console.log(checkAnagram("rat","car")) // Output : false
