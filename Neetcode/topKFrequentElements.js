// Given an integer array nums and an integer k, return the k most frequent elements. 
// You may return the answer in any order.
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


function topKFrequencyElements (nums, k){
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] ++;
        }else{
            obj[nums[i]] = 1;
        }
    }

    let entries = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    let result = []
    for(let i = 0; i < k; i++){
        result.push(entries[i][0]);
    }
    return result;
}

let nums = [2,1,1,2,2,3]
let k = 2

console.log(topKFrequencyElements(nums,k));