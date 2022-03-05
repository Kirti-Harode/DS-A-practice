// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// test_00:
// compress('ccaaatsss'); // -> '2c3at3s'
// test_01:
// compress('ssssbbz'); // -> '4s2bz'
// test_02:
// compress('ppoppppp'); // -> '2po5p'
// test_03:
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// test_04:
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'


// two pointers => (i, j)
const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;
    
    while(j <= s.length){ // last ele at last index will be undefined and it won't be equal to i and will get the count, if we dn't make it equal to s.length it won't give last ele count and ele
      if(s[i] === s[j]){
        j += 1;
      }else{
        count = j - i
        if (count >= 2) result.push(count);
        result.push(s[i])   // if we use an str to store the result and push it here it will run in linear time and time complexity will become O(n2) because that's inside the while loop. 
        i = j;
      }
      
    }
    return result.join("");
  };
  
  // Time complexity: O(n)
  // Space complexity: O(n)