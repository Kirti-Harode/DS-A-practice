// fib
// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// Solve this recursively.

// test_00:
// fib(0); // -> 0
// test_01:
// fib(1); // -> 1
// test_02:
// fib(2); // -> 1
// test_03:
// fib(3); // -> 2
// test_04:
// fib(4); // -> 3
// test_05:
// fib(5); // -> 5
// test_06:
// fib(35); // -> 9227465
// test_07:
// fib(46); // -> 1836311903

const fib = (n) => {
    // time complexity => O(2^n)
    // space complexity => O(n)
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2)
};

const fib = (n, memo={}) => {
    // time complexity => O(n)
    // spcae complexity => O(n)
    if(n in memo) return memo[n];
    if(n === 0) return 0;
    if(n === 1) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};