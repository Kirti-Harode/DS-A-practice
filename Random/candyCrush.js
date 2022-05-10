// It was a 45 min interview. First he started with my introduction and some prior experience of work for 
// about 10 minutes and asked me why i wanted to join bloomberg. 
// Then told me to open the hackerrank link where he gave me this question:

// Write a function to crush candy in one dimensional board. 
// In candy crushing games, groups of like items are removed from the board. 
// In this problem, any sequence of 3 or more like items should be removed and any items adjacent to 
// that sequence should now be considered adjacent to each other. This process should be repeated as 
// many time as possible. You should greedily remove characters from left to right.


// Example 1:

// Input: "aaabbbc"
// Output: "c"
// Explanation:
// 1. Remove 3 'a': "aaabbbbc" => "bbbbc"
// 2. Remove 4 'b': "bbbbc" => "c"
// Example 2:

// Input: "aabbbacd"
// Output: "cd"
// Explanation:
// 1. Remove 3 'b': "aabbbacd" => "aaacd"
// 2. Remove 3 'a': "aaacd" => "cd"
// Example 3:

// Input: "aabbccddeeedcba"
// Output: ""
// Explanation:
// 1. Remove 3 'e': "aabbccddeeedcba" => "aabbccdddcba"
// 2. Remove 3 'd': "aabbccdddcba" => "aabbcccba"
// 3. Remove 3 'c': "aabbcccba" => "aabbba"
// 4. Remove 3 'b': "aabbba" => "aaa"
// 5. Remove 3 'a': "aaa" => ""
// Example 4:

// Input: "aaabbbacd"
// Output: "acd"
// Explanation:
// 1. Remove 3 'a': "aaabbbacd" => "bbbacd"
// 2. Remove 3 'b': "bbbacd" => "acd"
// I solved it with recursion and also discussed the stack based approach.

// Follow-up:
// What if you need to find the shortest string after removal?

// Example:

// Input: "aaabbbacd"
// Output: "cd"
// Explanation:
// 1. Remove 3 'b': "aaabbbacd" => "aaaacd"
// 2. Remove 4 'a': "aaaacd" => "cd"


function crushCandy(s){      // s = "aabbccddeeedcba"
 
    let stack = [];            // []
    for(let ele of s){         // a
        if(stack.length !== 0 && stack[stack.length-1][0] !== ele && stack[stack.length-1][1] >= 3){    //
            // console.log(stack)
            stack.pop()
        }
        if(stack.length === 0 || stack[stack.length-1][0] !== ele){
            stack.push([ele, 1]);
            
        }else if(stack[stack.length-1][0] === ele) {
            let popped = stack.pop();
            stack.push([ele, popped[1]+1]);
        }
        
    }
    if(stack.length !== 0 && stack[stack.length-1][1] >= 3){
        stack.pop();
    }
    // console.log(stack)
    let result = "";
    for(let ele of stack){
        result += ele[0]
    }
    return result;
}

console.log(crushCandy("aaaabbbc"));
console.log(crushCandy("aabbbacd"));
console.log(crushCandy("aabbccddeeedcba"));
console.log(crushCandy("aaaabbbacd"));
