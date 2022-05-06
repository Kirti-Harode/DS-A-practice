// overlap subsequence
// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

// test_00:
// overlapSubsequence("dogs", "daogt"); // -> 3
// test_01:
// overlapSubsequence("xcyats", "criaotsi"); // -> 4
// test_02:
// overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
// test_03:
// overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
// test_04:
// overlapSubsequence(
//   "mumblecorebeardleggingsauthenticunicorn",
//   "succulentspughumblemeditationlocavore"
// ); // -> 15


const overlapSubsequence = (str1, str2, i=0, j=0) => {
    // base case if any one of the str is empty
    
  //   check first char of each str 
  //   if they macth give 1 to the egde and remove from the str, otherwise give 0
  //   on left side slice first char from str1
  //   on right side slice first char from str2
  //   and continue untill any str is empty (reached base case)
    
    
  //                                  cat, aot
  //                                /         \
  //                          at,aot           cat,ot
  //                            |              /    \
  //                         t, ot         at,ot     cat,t
  //                        /   \         /    \    /     \
  //                    ,ot    t,t    t,ot   at,t  at,t   cat,
    
    
  //   if any str empty return 0
  //   max of left and right add to edge value
    
  //   time: O(2^(n*m)) 
  //   n = len of str1
  //   m = len of str2
    
  //   avoid str slicing, index instead
    
    if(i === str1.length || j === str2.length) return 0;
    if(str1[i] === str2[j]){
      return 1 + overlapSubsequence(str1, str2, i+1, j+1);
    }else{
      let removeStr1 = overlapSubsequence(str1, str2, i+1, j);
      let removeStr2 = overlapSubsequence(str1, str2, i, j+1);
      return Math.max(removeStr1, removeStr2);
    }
  };


//   dynamic programming with memoization
//   n = length of str1
//   m = length of str2
//   Time: O(nm)
//   Space: O(nm)
const overlapSubsequence = (str1, str2, i=0, j=0, memo={}) => {
    let key = i + ',' + j;
    if(key in memo) return memo[key];
    if(i === str1.length || j === str2.length) return 0;
    if(str1[i] === str2[j]){
      memo[key] = 1 + overlapSubsequence(str1, str2, i+1, j+1, memo);
      return memo[key];
    }else{
      let removeStr1 = overlapSubsequence(str1, str2, i+1, j, memo);
      let removeStr2 = overlapSubsequence(str1, str2, i, j+1, memo);
      memo[key] = Math.max(removeStr1, removeStr2);
      return memo[key];
    }
};