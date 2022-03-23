// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n


// O(n) => time
// O(1) => space
var findDisappearedNumbers = function(nums) {
    let obj = {};
    let remaining = [];
   
    
    for(let j = 0; j< nums.length; j++){
        if(obj[nums[j]]){
            obj[nums[j]] ++;
        }else{
            obj[nums[j]] = 1;
        }
    }
    
    for(let i = 1;  i< nums.length+1; i++){
        if(obj[i] == undefined){
            remaining.push(i)
        }
    }
    return remaining;
};