// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// test_00:
// anagrams('restful', 'fluster'); // -> true
// test_01:
// anagrams('cats', 'tocs'); // -> false
// test_02:
// anagrams('monkeyswrite', 'newyorktimes'); // -> true
// test_03:
// anagrams('paper', 'reapa'); // -> false
// test_04:
// anagrams('elbow', 'below'); // -> true
// test_05:
// anagrams('tax', 'taxi'); // -> false
// test_06:
// anagrams('taxi', 'tax'); // -> false
// test_07:
// anagrams('night', 'thing'); // -> true
// test_08:
// anagrams('abbc', 'aabc'); // -> false

const anagrams = (s1, s2) => {
    // iterate over the s1 and add char and count as key value pair in the obj
    // iterate over the s2 and remove char count from the obj
    // see if all values are 0 in obj, return true if 0 otherwise return false
    let obj = []
    for (let char of s1){
      if (!(char in obj)){
        obj[char] = 0;
      }
      obj[char] += 1;
      
    }
  
    for (let char of s2){
      if ((obj[char] === undefined)){
        return false;
      }
       obj[char] -= 1;
      
    }
   
    // in loop iterating through keys of thge obj
    for(let char in obj){
      if(obj[char] !== 0 ){
        return false;
      }
    }
    return true;
  };
  
//   time complexity O(n+m+n) O(n) => linear
//   space complexity O(n) => only on object in memory