// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109a

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let count = 1;
    let max = 0;
    let currentNum;
    for(let key of set){
        // console.log(key)
        if(set.has(key-1) === false){
            currentNum = key;
            count = 1
            while(set.has(currentNum+1)){
                count ++;
                set.delete(currentNum+1)
                currentNum += 1;
            } 
            max = Math.max(count, max);
            
        }
       
    }
    return max;
};