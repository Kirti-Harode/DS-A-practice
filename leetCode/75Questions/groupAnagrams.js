// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


var groupAnagrams = function(strs) {
    let letterNums = {'a': 2, 
                      'b': 3, 
                      'c': 5, 
                      'd': 7, 
                      'e': 11, 
                      'f': 13, 
                      'g':17, 
                      'h':19, 
                      'i':23, 
                      'j':29,
                      'k': 31,
                      'l': 37,
                      'm': 41,
                      'n': 43,
                      'o': 47,
                      'p': 53,
                      'q': 59,
                      'r': 61,
                      's': 67, 
                      't': 71,
                      'u': 73,
                      'v': 79,
                      'w': 83,
                      'x': 89,
                      'y': 97,
                      'z': 101
                     };
    
    let subList = {};
    
    for(let str of strs){
        let pro = 1;
        for(let char of str){
            pro *= letterNums[char];
        }
        
        if(subList[pro]){
           subList[pro].push(str);
        }else{
           subList[pro] = [str];
        }
    }
    
    // console.log(subList);
    
    return Object.values(subList);
};