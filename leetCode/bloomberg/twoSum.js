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



// var twoSum = function(nums, target) {  // nums = [2,7,11,15], target = 9
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };

// loop over nums array,
// nested loop to check each num and add two to make target
// output - array with  indices of two nums 
// donot consider same element twice.
// time complexity => O(n^2)

// O(n)
// while loop with two variables, one will be i and j

var twoSum = function(nums, target) { 
    let remainings = {};
    for(let i = 0; i < nums.length; i++){
        let rem = target - nums[i];
        if(rem in remainings){
            return [i, remainings[rem]];
        }
       remainings[nums[i]] = i;
    }
};
