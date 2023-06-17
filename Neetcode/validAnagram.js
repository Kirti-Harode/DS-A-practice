// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

function validAnagram(s, t){
  let obj = {};
  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      obj[s[i]] ++;
    }else{
      obj[s[i]] = 1;
    }
  }
  for(let i = 0; i < t.length; i++){
    if(obj[t[i]]){
      obj[t[i]] --;
    }else{
      obj[t[i]] = 1;
    }
  }

  for(let val of Object.values(obj)){
    if (val > 0){
      return false;
    }
  }
  return true;
}
// Example 1:
// Input: 
s1 = "anagram" 
t1 = "nagaram"
// Output: true
console.log(validAnagram(s1, t1));

// Example 2:
// Input: 
s2 = "rat"
t2 = "car"
// Output: false
console.log(validAnagram(s2, t2));
 