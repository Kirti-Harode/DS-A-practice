// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105


var canJump = function(nums) {
    // iterate backwords
    // chnge the goal if possible to jump
    // index+ele = jump
    // if goal is index 0 return 
    
    // work backwards and move goal post as we iterate backwards
// we know that if we can reach the end with any earlier indices, then we can just try to reach that index instead
    
    let goal = nums.length-1;
    
    for(let i = nums.length-1; i >= 0; i--){
        if(i + nums[i] >= goal){
            goal = i;
        }
        if(goal === 0) return true;

    }
    return false;
};