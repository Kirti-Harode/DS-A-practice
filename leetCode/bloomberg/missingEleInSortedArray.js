// Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.

 

// Example 1:

// Input: nums = [4,7,9,10], k = 1
// Output: 5
// Explanation: The first missing number is 5.
// Example 2:

// Input: nums = [4,7,9,10], k = 3
// Output: 8
// Explanation: The missing numbers are [5,6,8,...], hence the third missing number is 8.
// Example 3:

// Input: nums = [1,2,4], k = 3
// Output: 6
// Explanation: The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// 1 <= nums[i] <= 107
// nums is sorted in ascending order, and all the elements are unique.
// 1 <= k <= 108

// not working for big input
var missingElement = function(nums, k) {
    let missing = [];
    let i = 0; 
    let j = 1;
    while(j < nums.length){
        let num = nums[i]
        while(num + 1 !== nums[j]){
            missing.push(num + 1);
            num = num+1;
        }
        i++;
        j++;
    }
    // console.log(missing)
     let nextNum = nums[nums.length-1]
    while(missing.length < k){
        missing.push(nextNum + 1);
        nextNum = nextNum + 1
    }
    
    // console.log(missing)
    return missing[k-1]
};

// time: O(n) solution
var missingElement = function(nums, k) {
    let missing = [];
    let i = 0; 
    while(i < nums.length -1){
       missed_count = nums[i+1] - nums[i] - 1;
       if(missed_count > 0){
           if(missed_count < k){
               k = k - missed_count;
           } else {
               // found kth missing number.
               break;
           }
       }
        i++;
    }
    return nums[i] + k;
};

