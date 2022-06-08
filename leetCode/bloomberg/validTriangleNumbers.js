// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

// Example 1:

// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Example 2:

// Input: nums = [4,2,3,4]
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000


// valid triangle is two sides sum is greater than the third side.
// keep three variables 
//         2,6,7,8,9,10,26,21
//         l       r  i
// in a sorted arr, start l at 0 and r 1 less then i
// i is the tird side add l + r anbd check is the sum is greater than the third side
// if true then add r-l to the total sum
// else increment l if sum is less than the third side
//decrement r if sum is greater

// time: O(n2), space:O(1)
var triangleNumber = function(nums) {       //[2,2,3,4]
    let result = 0;
    
    if(nums.length < 3) return result;
    
    nums.sort((a,b) => a-b);  
    
    for(let i = 2; i < nums.length; i++){      //i = 2, 3, 
        let left = 0;                        // 1
        let right = i-1;                      // 1
        
        while(left < right){
            if((nums[left] + nums[right] ) > nums[i]){
                result += right - left;   // 1+2
                right --;
            }else{
                left ++;
            }
        }
    }
    return result;
};