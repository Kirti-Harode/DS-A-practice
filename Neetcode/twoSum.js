// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


function twoSum(nums, target) {
    let obj = {};
    for(let i = 0; i< nums.length; i ++){
        let remaining = target - nums[i];
        if(obj[remaining] !== undefined){
            return [i, obj[remaining]];
        }
        obj[nums[i]] = i;
    }
}

let nums1 = [2,7,11,15];
let target1 = 6;

let nums2 = [3,3], target2 = 6
// Output: [0,1]

let nums3 = [2,7,11,15], target3 = 9
// Output: [0,1]

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
