// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.




// time: (n+n+n)
// space:O(n+n+n)
var minRemoveToMakeValid = function(s) {
    let invalidIndex = new Set();   // O(n)
    let result = "";                // O(n)
    let stack = [];                 // O(n)
    for(let i = 0; i< s.length; i++){
        if(s[i] === '(') stack.push(i);
        if(s[i] === ')'){
            if(stack.length === 0){
                invalidIndex.add(i)
            }else{
                stack.pop();
            }
        }
    }
   while(stack.length){
       invalidIndex.add(stack.pop())
   };
    
    for(let i = 0; i < s.length; i++){
        if(invalidIndex.has(i)){
            continue;
        }else{
            result += s[i];
        }
    }
    return result;
};

// two pass technique:
var minRemoveToMakeValid = function(s) {
    let modified = removeInvalidCloseing(s, '(', ')');
    let result = removeInvalidCloseing(modified.split("").reverse().join(""), ')', '(');
    return result.split("").reverse().join("");
};

const removeInvalidCloseing = function(s, open, close){
    let modified = "";
    let balanceCount = 0;
    for(let ele of s){
        if(ele === open){
            balanceCount ++;
        }else if(ele === close){
            
            if(balanceCount === 0) continue;
            balanceCount --;
        }
        
        modified += ele;
    }
    return modified;
}


// two pass modified str twice time/space O(n)
var minRemoveToMakeValid = function(s) {
    let modifiedStr = "";
    let openSeen = 0;
    let balanceCount = 0;
    
    for(let ele of s){        //"l(e)et((co)d(e"
        if(ele === '('){
            openSeen ++;        // 4
            balanceCount ++;    // 1
        }else if(ele === ')'){
            if(balanceCount === 0) continue;
            balanceCount --;    
        }
        modifiedStr += ele;   // 'l(e)et((co)d(e'
    }
    
    if(balanceCount === 0) return modifiedStr;
    
    let result = "";
    let openToKeep = openSeen - balanceCount; //3
    for(let ele of modifiedStr){      // 'l(e)et((co)d(e'
        if(ele == "("){         
            openToKeep --;       //0
            if(openToKeep < 0) continue;
        }
        result += ele;        //'l(e)et((co)de'
    }
    return result;
};