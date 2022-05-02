// befitting brackets
// Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

// You may assume the string contains only characters: ( ) [ ] { }

// test_00:
// befittingBrackets('(){}[](())'); // -> true
// test_01:
// befittingBrackets('({[]})'); // -> true
// test_02:
// befittingBrackets('[][}'); // -> false
// test_03:
// befittingBrackets('{[]}({}'); // -> false
// test_04:
// befittingBrackets('[]{}(}[]'); // -> false
// test_05:
// befittingBrackets('[]{}()[]'); // -> true
// test_06:
// befittingBrackets(']{}'); // -> false
// test_07:
// befittingBrackets(''); // -> true
// test_08:
// befittingBrackets('{[(}])'); // -> false

const befittingBrackets = (str) => {
    //   stack to keep track the parenthises
    //   add the opning brace and remove when found find closing brace
    let brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let stack = [];
    for(let char of str){
        if(char in brackets){
            stack.push(brackets[char]);
        }else{
            if(stack.length > 0 && stack[stack.length - 1] === char){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
};
// n = length of string
// Time: O(n)
// Space: O(n)


// below solution will fail for following example:
// befittingBrackets('{[(}])'); // -> false

const befittingBrackets = (str) => {
    let parenCount = 0;
    let squareCount = 0;
    let curlyCount = 0;
    for(let i = 0 ; i < str.length; i++){
       if(parenCount === 0 && str[i] === ')') return false;
       if(squareCount === 0 && str[i] === ']') return false;
       if(curlyCount === 0 && str[i] === '}') return false;
      
       if(str[i] === "(" ) parenCount ++;
       if(str[i] === ")" ) parenCount --;
      
       if(str[i] === "{" ) curlyCount ++;
       if(str[i] === "}" ) curlyCount --;
      
       if(str[i] === "[" )  squareCount ++;
       if(str[i] === "]" ) squareCount --;
    }
     if(parenCount === 0 && squareCount === 0 && curlyCount ===0) return true;
     return false;
};