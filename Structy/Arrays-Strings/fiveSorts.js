// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// test_00
// fiveSort([12, 5, 1, 5, 12, 7]);
// // -> [12, 7, 1, 12, 5, 5] 
// test_01
// fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
// test_02
// fiveSort([5, 5, 5, 1, 1, 1, 4]);
// // -> [4, 1, 1, 1, 5, 5, 5] 
// test_03
// fiveSort([5, 5, 6, 5, 5, 5, 5]);
// // -> [6, 5, 5, 5, 5, 5, 5] 
// test_04
// fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 

const fiveSort = (nums) => {
    // take two var i, j
    //   i from 0 and j from last index
    //   if j is at 5 dec, if i is at 5 then swap them 
    //   do untill i === j
      
    //   two pointer strategy : 
      let i = 0
      let j = nums.length-1
      while(i <= j){
        if(nums[j] === 5){
          j --;
        }else if (nums[i] === 5){
            [nums[i], nums[j] ]= [nums[j], nums[i]]
            i++;
        }else{
          i++;
        }
      }
      return nums
    };

    // time O(n)
    // Space: O(1)