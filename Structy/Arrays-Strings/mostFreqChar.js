// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// test_00:
// mostFrequentChar('bookeeper'); // -> 'e'
// test_01:
// mostFrequentChar('david'); // -> 'd'
// test_02:
// mostFrequentChar('abby'); // -> 'b'
// test_03:
// mostFrequentChar('mississippi'); // -> 'i'
// test_04:
// mostFrequentChar('potato'); // -> 'o'
// test_05:
// mostFrequentChar('eleventennine'); // -> 'e'
// test_06:
// mostFrequentChar("riverbed"); // -> 'r'

//   create an obj
//   iterate over the str
//   add char as a key and count as a val
//   find max val and return the key assoiciated

const mostFrequentChar = (s) => {
  let counter = {};
  
  for(let char of s){
    if(!(char in counter)) {
      counter[char] = 0;
    }
    counter[char] += 1;
  }
  
  let max = 0;
  let frequent ;
  for(let char in counter){
    if(counter[char] > max) {
      max = counter[char];
      frequent = char;
    }
  }
    
 return frequent;
};

// time complexity => O(n)
// space complexity => O(n)