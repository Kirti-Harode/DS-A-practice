// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

// two pointers => (i, j)
const uncompress = (s) => {
    // let result = '';
    let result = [];
    let nums = '0123456789';
    let i = 0;
    let j = 0;
    
    while(j < s.length){
      if(nums.includes(s[j])){
        j ++;
      }else{
        let num = Number(s.slice(i, j));
        for(let k = 0; k < num; k++ ){
          // result += s[j]; //adding char to str is O(n) complexity
          result.push(s[j]); //constant time coplexity
        }
        j++;
        i = j;
      }
    }
    return result.join(''); //linear complexity
};

// Time complexity: O(nm)
// Space complexity: O(nm)