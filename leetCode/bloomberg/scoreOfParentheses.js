// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2
 

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.


var scoreOfParentheses = function(s) {
    let stack = [0];   //[0,2]
    for(let ele of s){
        if(ele === '('){
            stack.push(0);
        }else{
            let popped = stack.pop(); //0
            if(popped === 0){
                stack[stack.length-1] += 1;
            }else{
                stack[stack.length-1] += popped * 2;
            }
        }
    }
    return stack[stack.length-1];
};