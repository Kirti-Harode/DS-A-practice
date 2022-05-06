// max palin subsequence
// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// test_00:
// maxPalinSubsequence("luwxult"); // -> 5
// test_01:
// maxPalinSubsequence("xyzaxxzy"); // -> 6
// test_02:
// maxPalinSubsequence("lol"); // -> 3
// test_03:
// maxPalinSubsequence("boabcdefop"); // -> 3
// test_04:
// maxPalinSubsequence("z"); // -> 1
// test_05:
// maxPalinSubsequence("chartreusepugvicefree"); // -> 7
// test_06:
// maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"); // -> 15
// test_07:
// maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"); // -> 31


// brute force:
const maxPalinSubsequence = (str) => {
    // 1) lxuul => luul can move any charectors
    // 2) e => is a subsequence and also palindrome 
      
      
    //                      lxuul
    //                        |2 (chars matched here l and l)
    //                       xuu
    //                     0/  \0
    //                   uu     xu  removed 1st and then last
    //                  2|     0/ \0
    //                  []     u   x     <- return 1 for single chaqr and add to edge num
      
    //   base case if str.length is 0 return 0
    //   if length is 1 return 1
    //   get the max from the bottom to top
    //   first step compare last and first char is same or not
      
      // s = length of string
      // time: O(2^s)
      if(str.length === 0) return 0;
      if(str.length === 1) return 1;
      
      if(str[0] === str[str.length-1]){
        return 2 + maxPalinSubsequence(str.slice(1 , str.length-1));
         
      }else{
        let removeFirst = maxPalinSubsequence(str.slice(1));
        let removeLast = maxPalinSubsequence(str.slice(0, str.length-1));
        return Math.max(removeFirst, removeLast);
        
      }
      
};
    

// dynamic programming with memoization:
// n = length of the string
// Time: O(n^2)
// Space: O(n^2)

const maxPalinSubsequence = (str, i=0, j=str.length-1, memo={}) => {
    let key = i +','+j;
    if(key in memo) return memo[key];
    if(i > j) return 0;
    if(i === j) return 1;
    
    if(str[i] === str[j]){
        memo[key] = 2 + maxPalinSubsequence(str, i+1, j-1, memo);
        return memo[key];
    }else{
        let removeFirst = maxPalinSubsequence(str, i+1, j, memo);
        let removeLast = maxPalinSubsequence(str, i, j-1, memo);
        memo[key] = Math.max(removeFirst, removeLast);
        return memo[key] ;
    }
        
};