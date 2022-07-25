// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104


//neetcode solution :
var search = function(nums, target) {
  
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        
        if(target === nums[mid]){
            return mid;
        }
        
        if(nums[left] <= nums[mid]){
            if(target > nums[mid] || target < nums[left]){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }else{
            if(target < nums[mid] || target > nums[right]){
               right = mid-1;
            }else{
                left = mid+1;
            }
        }
    }
    return -1;
};



// My solution :

var search = function(nums, target) {
    
    let pivotIndex = findPivot(0, nums.length-1, nums);
    // console.log(pivotIndex)
    if(target === nums[pivotIndex]) return pivotIndex;
    
    if(pivotIndex === -1){
        return binarySearch(0, nums.length-1, nums, target);
    }
    
    if(target < nums[0]){  
        return binarySearch(pivotIndex+1, nums.length-1, nums, target);  
    }else{
        return binarySearch(0, pivotIndex, nums, target); 
    }

    return -1;
};

function binarySearch(left, right, nums, target){
    while(left <= right){
        // console.log('left', left)
        // console.log('right' ,right)
        let mid = Math.floor((left+right)/2);
        // console.log('mid', mid)
        
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return -1;
}

function findPivot(left, right, nums){
    if(nums[left] < nums[right]) return -1;
    
    while(left < right){
        // console.log('left', left)
        // console.log('right' ,right)
        let mid = Math.floor((left+right)/2);
        // console.log('mid', mid)
        if(nums[mid] > nums[left]){
            left = mid;
        }else{
            right = mid;
        }
    }         
    return left;
    
}