// paired parentheses
// Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

// You may assume the string contains only alphabetic characters, '(', or ')'.

// test_00:
// pairedParentheses("(david)((abby))"); // -> true
// test_01:
// pairedParentheses("()rose(jeff"); // -> false
// test_02:
// pairedParentheses(")("); // -> false
// test_03:
// pairedParentheses("()"); // -> true
// test_04:
// pairedParentheses("(((potato())))"); // -> true
// test_05:
// pairedParentheses("(())(water)()"); // -> true
// test_06:
// pairedParentheses("(())(water()()"); // -> false
// test_07:
// pairedParentheses(""); // -> true
// test_08:
// pairedParentheses("))()"); // -> false


const pairedParentheses = (str) => {
    //   iterate over the string
    //   create two var to count open and close parentheses
    //   at the end if count is same then return true else return false
      
    let openCount = 0;
    
    for(let i = 0 ; i < str.length; i++){
    if(openCount === 0 && str[i] === ')') return false;
    if(str[i] === "(" ) openCount ++;
    if(str[i] === ")" ) openCount --;
    }
    if(openCount === 0) return true;
    return false;
};


const pairedParentheses = (str) => {
    let count = 0;
    
    for (let char of str) {
      if (char === '(') {
        count += 1;
      } else if (char === ')') {
        if (count === 0) {
          return false;
        }
        
        count -= 1;
      }
    }
    
    return count === 0;
  };

// n = length of string
// Time: O(n)
// Space: O(1)