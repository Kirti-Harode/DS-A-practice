// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.


// alvin solution not good
var wordBreak = function(s, wordDict, memo={}) {
    if(s in memo) return memo[s];
    if(s.length === 0) return true;
    
   for(let word of wordDict){
       if(s.startsWith(word)){
           let sliced = s.slice(word.length);
            if(wordBreak(sliced, wordDict, memo)) {
                memo[s] = true;
                return true;
            }
       }
   } 
    memo[s] = false;
    
    return memo[s];
};

// best solution
// convert wordDict to a set
var wordBreak = function(s, wordDict, memo={}) {
    
    if(s in memo) return memo[s]
    if(s.length === 0) return true;
    
    let i = 0;
    let word = '';
    while(i < s.length){
        word += s[i];
        if(wordDict.includes(word)){
            if(wordBreak(s.slice(word.length), wordDict, memo)){
                memo[s] = true;
                return true;
            }
        }
        i ++;
    }
    memo[s] = false
    return memo[s];
};