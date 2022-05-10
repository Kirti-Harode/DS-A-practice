// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.



//using stack: 
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1];
    for(let i = 0; i < s.length; i++ ){
        if(s[i] === '(' ){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length === 0){
                stack.push(i);
            }else{
               max = Math.max(max, i - stack[stack.length-1]);
            }
        }
    }
    return max;
};

// Complexity Analysis:
// Time complexity: O(n). n is the length of the given string.
// Space complexity: O(n). The size of stack can go up to n.


// without extra memory :
var longestValidParentheses = function(s) {
    // explaination: 
    //   When scanning from left to right, you might end up with a positive value for 'left'.
    // Say, your left ends up with 4 and right ends up with 3. This means there could be 3 valid pairs giving an answer of 6.
    //  But you never got the chance to calculate
    //  that because your "left" has always managed to stay more than "right". Example: "(((()))"   
    
    // '(' => left, ')' => right
    let left = 0;
    let right = 0;
    let maxLen = 0;
//     from left to right:
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            left ++;
        }else{
            right ++;
        }
        if(left === right){
            maxLen = Math.max(maxLen, 2*right);
        }else if (right >= left){
            left = 0;
            right = 0;
        }
    }
//     from right to left:
    left = 0;
    right = 0;
    for(let i = s.length-1; i >= 0 ; i--){
        if(s[i] === '('){
            left ++;
        }else{
            right ++;
        }
        if(left === right){
            maxLen = Math.max(maxLen, 2*left);
        }else if (left >= right){
            left = 0;
            right = 0;
        }
    }
    return maxLen;
};

    
// Complexity Analysis
// Time complexity: O(n). n is the length of the given string.
// Space complexity: O(1). only variables


// explaination: 
//There are only three cases for a string:

// '(' are more than ')'
// '(' are less than ')'
// '(' and ')' are the same
// Now, when you scan from left to right, you can only find the correct maxLength for cases 2 and 3,
//  because if it is case 1, where '(' are more than ')' (e.g., "((()"), 
//  then left is always greater than right and maxLength does not have the chance to be updated.

// Similarly, when you scan from right to left, you can only find the maxLength for cases 1 and 3.

// Therefore, a two-pass scan covers all the cases and is guaranteed to find the correct maxLength