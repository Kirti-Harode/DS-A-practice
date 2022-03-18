// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let sorted = nums.sort(function(a,b){return(a-b)});
    
    let ans = 0;
    let count=0;
    
    let sub = [sorted[0]];
    
    for(let i = 1; i < sorted.length; i++){
        if(sorted[i] != sorted[i-1]){
            sub.push(sorted[i]);
        }
    } 
    
    for(let i = 0; i < sub.length; i++){
        if(sub[i] === sub[i-1]+1){
            count++;
        }else{
            count = 1;
        }
        
        ans = Math.max(ans, count);
    }
    return ans;
};



var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0

    let sortedArray = nums.sort((a,b) => a-b)

    let array = [sortedArray[0]]
    let current_array = [sortedArray[0]]

    for (let i = 1; i < nums.length; i++) {
        let num = sortedArray[i]
        if (current_array[current_array.length -1] + 1 === num) {
            current_array.push(num)
        } else if (current_array[current_array.length -1] === num) {
            continue
        } else {
            current_array = [num]
        }
        if (current_array.length > array.length) {
            array = current_array
        }
    }
   return array.length;
   
};