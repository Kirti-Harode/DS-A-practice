// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

// Time complexity: O(n)

var countBits = function(n) {
    let output = [0];
    for(let i = 1; i < n+1; i++){
        // x / 2 is x >> 1 and x % 2 is x & 1
        output.push(output[i >> 1] + (i&1));
    }
    return output;
};


// time: O(nlogn)

var countBits = function(n) {
    let output = new Array(n+1)
    for(let i = 0; i <= n; i++){
        output[i] = popCount(i);
    }
    return output;
};

function popCount(x){
    let count = 0;
    while(x !== 0){
        x &= x-1;
        count ++;
    }
    return count;
}