// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// brute force:
// time : O(n)
// space: O(1)
var productExceptSelf = function(nums) {
    let result = [];
    let isZero = false;
    let pro = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            pro *= nums[i];
        }else{
            isZero = true;
        }
    } 
    for(let i = 0; i < nums.length; i++){
        if(isZero){
            if(nums[i] !== 0){
                result.push(0);
            }else{
                result.push(pro);
            }
        }else{
            result.push(pro/nums[i]);
        }
        
    }
    return result;
};


// better: 
// time: O(n)
// space: O(1)
var productExceptSelf = function(nums) {
    let result = new Array(nums.length);
    
    let pre = 1;
    for(let i = 0; i < nums.length; i++){
       result[i] = pre;
        pre *= nums[i];
    }
    let post = 1;
    for(let i = nums.length-1; i >= 0; i--){
       result[i] *= post;
        post *= nums[i];
    }
    return result;
};