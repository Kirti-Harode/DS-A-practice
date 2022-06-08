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


// time:O(n), space:O(k) len of the longest substring
var lengthOfLongestSubstring = function(s) {
    let chars = new Set();
    
    let right = 0;
    let left = 0;
    let max = 0;
    while(right < s.length){
        let char = s[right];
        while(chars.has(char)){
            chars.delete(s[left]);
            left += 1;
        }
        chars.add(char);
        max = Math.max(max, right-left+1);
        right ++;
    }
    return max;
};