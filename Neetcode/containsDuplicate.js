// Given an integer array nums, 
// return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// Approch : 
// wrost case scenario duplicates can be at the end of the array: iterating through all of the numbers is not an good idea.

// Use Object (Hash) 
// iterate over the array once and put the numbers in the hash, while adding them into the hash check to see if the number is already present
// if yes then return true else return false
// we know that hash have an liner lookup and insertion time. 
// hash can only have unique keys , key-value pair
function containsDuplicate(nums) {
    let uniqueNums = {};
    for(let i =0; i < nums.length; i++) {
        if(uniqueNums[nums[i]]){
            return true;
        }else{
            uniqueNums[nums[i]] = 1;
        }
    }
    return false;
}

nums1 = [1,2,3,1]
//  true
console.log(containsDuplicate(nums1));

nums2 = [1,2,3,4]
//  false
console.log(containsDuplicate(nums2));

nums3 = [1,1,1,3,3,4,3,2,4,2]
//  true
console.log(containsDuplicate(nums3));
