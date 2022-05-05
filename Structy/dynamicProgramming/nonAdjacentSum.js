// non adjacent sum
// Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

// For example, given:

// [2, 4, 5, 12, 7]

// The maximum non-adjacent sum is 16, because 4 + 12. 
// 4 and 12 are not adjacent in the array.
// test_00:
// const nums = [2, 4, 5, 12, 7];
// nonAdjacentSum(nums); // -> 16
// test_01:
// const nums = [7, 5, 5, 12];
// nonAdjacentSum(nums); // -> 19
// test_02:
// const nums = [7, 5, 5, 12, 17, 29];
// nonAdjacentSum(nums); // -> 48
// test_03:
// const nums = [
//   72, 62, 10,  6, 20, 19, 42,
//   46, 24, 78, 30, 41, 75, 38,
//   23, 28, 66, 55, 12, 17, 9,
//   12, 3, 1, 19, 30, 50, 20
// ];
// nonAdjacentSum(nums); // -> 488
// test_04:
// const nums = [
//   72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
//   30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
//   83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
//   61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
//   30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
//   72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
//   42
// ];
// nonAdjacentSum(nums); // -> 1465


//brute force with slice
const nonAdjacentSum = (nums) => {
    // base case empty arr return 0
      
    //                       [2,4,5,12,7]
    //                         /      \
    //                   [5,12,7]    [4,5,12,7]
    //                   /    \        /    \ 
    //                [7]   [12,7]   [12,7] [5,12,7]
    //               / \     / \
    //             []  []  []  [7]
      
    //   time: O(2^n) 
    //   space: O(n)
      
    if(nums.length === 0) return 0;
    const include = nums[0] + nonAdjacentSum(nums.slice(2)); //slice extra time
    const exclude = nonAdjacentSum(nums.slice(1));
      
    return Math.max(include, exclude);
};

//brute force without slice
const nonAdjacentSum = (nums, i=0) => {
    //   time: O(2^n)
    //   space: O(n)
      
    if(i >= nums.length) return 0;
    const include = nums[i] + nonAdjacentSum(nums,i+2);
    const exclude = nonAdjacentSum(nums, i+1);
      
    return Math.max(include, exclude);
};


// dynamic programming with memoization

const nonAdjacentSum = (nums, i=0, memo={}) => {
    if(i in memo) return memo[i];
    if(i >= nums.length) return 0;
    const include = nums[i] + nonAdjacentSum(nums,i+2, memo);
    const exclude = nonAdjacentSum(nums, i+1, memo);
    memo[i] = Math.max(include, exclude);
    return memo[i];
};
  
  // n = length of nums
  // Time: O(n)
  // Space: O(n)