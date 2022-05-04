// nesting score
// Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

// [] is worth 1 point
// XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
// [S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
// You may assume that the input only contains well-formed square brackets.

// test_00:
// nestingScore("[]"); // -> 1
// test_01:
// nestingScore("[][][]"); // -> 3
// test_02:
// nestingScore("[[]]"); // -> 2
// test_03:
// nestingScore("[[][]]"); // -> 4
// test_04:
// nestingScore("[[][][]]"); // -> 6
// test_05:
// nestingScore("[[][]][]"); // -> 5
// test_06:
// nestingScore("[][[][]][[]]"); // -> 7
// test_07:
// nestingScore("[[[[[[[][]]]]]]][]"); // -> 129

const nestingScore = (str) => {
    //   create an stack with 0 in it
    //   iterate through str
    //   for every opening brackets add 0 to stack
    //   if closing bracket then pop from the stack and check if that is a 0 or not
    //   if zero then add 1 to it and push back to the stack
    //   else multiply by 2
    //   after the loop just return last ele of the stack
      
    let stack = [0];
    for(let ele of str){
    if(ele === '['){
        stack.push(0);
    }else{
        let popped = stack.pop();
        if(popped === 0){
        stack[stack.length-1] += 1;
        }else{
        stack[stack.length-1] += popped * 2;
        }
    }
    }
    return stack[stack.length-1];
      
};


// n = length of string
// Time: O(n)
// Space: O(n)