// can concat
// Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

// You may reuse words of the array as many times as needed.

// test_00:
// canConcat("oneisnone", ["one", "none", "is"]); // -> true
// test_01:
// canConcat("oneisnone", ["on", "e", "is"]); // -> false
// test_02:
// canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
// test_03:
// canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
// test_04:
// canConcat("santahat", ["santah", "hat"]); // -> false
// test_05:
// canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
// test_06:
// canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "


const canConcat = (s, words) => {
    // "foodisgood", ["is", "g", "ood", "f", foo]=> true
      
    //   look for a word from words that matches first few char in the s
    //   if it does on left side remove that prefix
    //   remove other pref in right side
    //   base case if s is empty return true
    //   from right and left take true (use or in between)
      
    //                                  foodisgood
    //                                 f/          \foo
    //                             oodisgood       disgood
    //                             ood|
    //                            isgood
    //                            is|
    //                            good
    //                         true|
    //                            ()
      
    //   time: O(n^s)
    //   space: O(s)
    //   n = num of words
    //   s = string length
    //   worst case: "qqqqqqqqqqx", [q, qq, qqq, qqqq, qqqqq]
    //   five children of each node
      
      
      if(s.length === 0) return true;
      for(let word of words){
        if(s.startsWith(word)){
          let sliced = s.slice(word.length);
          if (canConcat(sliced, words)){
            return true;
          }
        }
      }
      return false;
};

// dynamic programming with memoization
// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)
const canConcat = (s, words, memo={}) => {
    if(s in memo) return memo[s];
    if(s.length === 0) return true;
    for(let word of words){
      if(s.startsWith(word)){
        let sliced = s.slice(word.length);
        if (canConcat(sliced, words, memo)){
          memo[s] = true;
          return true;
        }
      }
    }
    memo[s] = false;
    return false;
};