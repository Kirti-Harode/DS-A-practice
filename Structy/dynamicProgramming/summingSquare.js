// summing squares
// Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

// Given 12:

// summingSquares(12) -> 3

// The minimum squares required for 12 is three, by doing 4 + 4 + 4.

// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
// test_00:
// summingSquares(8); // -> 2
// test_01:
// summingSquares(9); // -> 1
// test_02:
// summingSquares(12); // -> 3
// test_03:
// summingSquares(1); // -> 1
// test_04:
// summingSquares(31); // -> 4
// test_05:
// summingSquares(50); // -> 2
// test_06:
// summingSquares(68); // -> 2
// test_07:
// summingSquares(87); // -> 4

const summingSquares = (n) => {
  
    //   brute force: 
    // time: O(sqrt(n^n))
    // space: O(n)
      
      
    //             n =   10
    //              1/  4|  9\
    //              9    6   1
      
    //   if n is zero return 0
     
      
    if( n === 0) return 0;
    let minSquares = Infinity;
    for(let i = 1; i <= Math.sqrt(n); i++){
        let square = i*i;
        const numSquares = 1 + summingSquares(n-square);
        minSquares = Math.min(minSquares, numSquares);
    }
    return minSquares;
};
    

// dynamic programming with memoization
const summingSquares = (n, memo={}) => {

    if(n in memo) return memo[n];
    if( n === 0) return 0;
    let minSquares = Infinity;
    for(let i = 1; i <= Math.sqrt(n); i++){
      let square = i*i;
      const numSquares = 1 + summingSquares(n-square, memo);
      minSquares = Math.min(minSquares, numSquares);
    }
    memo[n] = minSquares;
    return minSquares;
};
  
  
  // n = length of nums
  // Time: O(n * sqrt(n))
  // Space: O(n)