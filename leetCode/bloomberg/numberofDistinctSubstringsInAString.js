// Given a string s, return the number of distinct substrings of s.

// A substring of a string is obtained by deleting any number of characters (possibly zero) from the front of the string and any number (possibly zero) from the back of the string.

// Example 1:

// Input: s = "aabbaba"
// Output: 21
// Explanation: The set of distinct strings is ["a","b","aa","bb","ab","ba","aab","abb","bab","bba","aba","aabb","abba","bbab","baba","aabba","abbab","bbaba","aabbab","abbaba","aabbaba"]
// Example 2:

// Input: s = "abcdefg"
// Output: 28
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.
 

// Follow up: Can you solve this problem in O(n) time complexity?

// time: O(n^2 * logm ) ideally: logm to add to the set
// space:O(n^2 * n/2) approx, avg len of each substr is n/2 and total num of substr is approx n^2
var countDistinct = function(s) {
    let subStrs = new Set();
    
    for(let i = 0; i < s.length; i++){
        for(let j = i ; j < s.length; j++){
            // if(subStrs.has(s.slice(i, j+1))) continue;
            subStrs.add(s.slice(i, j+1));
        }
    }
    return subStrs.size;
};

// using trie: time:O(n2), space: approx O(1) constant bcause each node can only have 26 chi;dren
class Trie {
    constructor(){
       this.children = new Map(); 
    }
};

var countDistinct = function(s, count = 0) {
    let root = new Trie();
    let len = s.length;
    
    for(let i = 0; i < len; i++){
        let node = root;
        for(let j = i; j < len; j++){
            let char = s[j];
            
            if(!(node.children.has(char))){
                node.children.set(char, new Trie())
                count ++;
            }
            node = node.children.get(char);
        }
    }
    return count;
};