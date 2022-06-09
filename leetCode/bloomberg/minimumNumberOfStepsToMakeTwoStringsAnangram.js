// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams. 
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s.length == t.length
// s and t consist of lowercase English letters only.

var minSteps = function(s, t) {
    let total = 0;
    let charS = {};
    
    for(let char of s){
        if(charS[char] === undefined){
            charS[char] = 1;
        }else{
            charS[char] ++;
        }
    }
    
    for(let char of t){
        if(char in charS){
            charS[char] --;
        }else{
            total ++;
        }
    }
 
    let freq = Object.values(charS);
    for(let ele of freq){
        if(ele < 0) total += Math.abs(ele)
    }
    return total;
};


var minSteps = function(s, t) {  // "leetcode",  "practice"
    let freq = {};          //{l: 1, e:2, t:0, c:0, o:1, d:1}
    let count = 0;
    for(let char of s){
        if(freq[char] === undefined){
            freq[char] = 1;
        }else{
            freq[char]++;
        }
    }
    
    for(let char of t){    //"practice"
       if(freq[char] === undefined) {
           count += 1;      // 5
       }else{
           if(freq[char] > 0){
               freq[char] -= 1;
           }else{
               count += 1;
           }
       }
    }
    return count;
};