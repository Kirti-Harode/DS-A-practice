// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let res = [];
    
    for(let i = 0; i < nums.length; i++){   //[-1,0,1,2,-1,-4]
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        
        let left = i + 1;            //1
        let right = nums.length - 1; //6
        
        while(left < right){       //1<6
            let sum = nums[i] + nums[left] + nums[right];   //-1+0+-4
            if(sum < 0){
                left ++;
            }else if(sum > 0){
                right --;
            }else{
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                while(left < right && nums[left] === nums[left-1]){
                    left+=1;
                }
            }
        }
    }
    return res;
};