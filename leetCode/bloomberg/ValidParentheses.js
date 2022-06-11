// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


var isValid = function(s) {
    let parentheses = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    
    let stack = [];
    for(let ele of s){
        if(ele in parentheses){
            stack.push(parentheses[ele]);
        }else {
            if(stack.length && ele === stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length === 0) return true;
    return false;
};