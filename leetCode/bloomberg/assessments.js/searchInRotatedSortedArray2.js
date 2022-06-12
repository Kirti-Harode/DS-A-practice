// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

 

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104
 

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?


var search = function(nums, target) {
    if(nums.length === 1){
        if(nums[0] === target){
            return true;
        }else{
            return false;
        }
    }
    
    let rotationIndex = findIndex(nums);
    
    if(nums[rotationIndex] === target) return true;
    
    if(target < nums[0]){
        return binarySearch(rotationIndex, nums.length-1, target, nums);
    }else if(target > nums[nums.length-1]){
        return binarySearch(0, rotationIndex, target, nums);
    }
   
};

function binarySearch(left, right, target, nums){
    while(left <= right){
        let mid = Math.floor(left+right/2);
        if(nums[mid] === target) return true;
        
        if(nums[mid] > target){
            right = mid-1;
        }else if(nums[mid] < target){
            left = mid+1;
        }
    }
    return false;
}

function findIndex(nums){
    let left = 0;
    let right = nums.length-1;
    
    while(left < right){
        let mid = Math.floor(left+right/2);
        if(nums[mid] > nums[mid+1]){
            return mid+1;
        }
        if(nums[mid] > nums[left]){
            left = mid+1;
        }else if(nums[mid] < nums[right]){
            right = mid-1;
        }
    }
    return 0;
}
// As we can see, by having duplicate elements in the array, we often miss the opportunity to apply binary search in certain search spaces. Hence, we get O(N)O(N) worst case (with duplicates) 
// vs O(\log N)O(logN) best case complexity (without duplicates).