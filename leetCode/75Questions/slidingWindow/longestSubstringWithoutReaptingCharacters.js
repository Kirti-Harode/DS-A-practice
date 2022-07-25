// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


var lengthOfLongestSubstring = function(s) {
    let subStr = new Set();
    let maxLen = 0;
    
    let i = 0;
    let j = 0;
    while(j < s.length){
        while(subStr.has(s[j])){
            subStr.delete(s[i]);
            i++
        }
        subStr.add(s[j]);
        let currLen = j-i+1;
        maxLen = Math.max(maxLen, currLen)
        j++;
        
    }
    return maxLen
};