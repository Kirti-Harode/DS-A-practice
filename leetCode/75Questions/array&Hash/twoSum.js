// 1. Two Sum
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

var twoSum = function(nums, target) {
   let i = 0;
   let j =  i+1;
   while(i < nums.length){
       if(nums[i]+nums[j] === target){
           return [i, j];
       }
       i++;
       j++;
   }
   return false;
}
// time complexity O(n) 
// space complexity O(1)
// console.log(twoSum([1, 2, 3, 4, 6, 8], 5));




function betterTwoSum(nums, target){
    let sorted = nums.sort(function(a,b){ return(a-b)});
    let left = 0;
    let right = sorted.length-1;
    while (left < right){
        currentSum = sorted[left] + sorted[right]
        if(currentSum === target) return true;

        if(currentSum > target) {
            right -=1;
        }else{
            left ++;
        }
    }
    return false;
}


function bestTwoSum(arr, target){
    let obj = {};
    for(let i = 0 ; i < arr.length; i++){
        if(obj[target - arr[i]]){
            return true;
        }
        obj[arr[i]] = true;
    }
    return false;
}

console.log(bestTwoSum([1, 5, 6, 4, 2, 3], 5));
