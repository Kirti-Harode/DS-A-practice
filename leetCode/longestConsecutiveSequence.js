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



//time: o(n)

var longestConsecutive = function(nums) {
    
    // {100, 4, 200, 1, 3, 2}
    let set = new Set(nums);  //{100,4,200,1,3,2}
    let max = 0;    // 1
    let count = 1;    // 1
    let currentNum = nums[0]; //  100
    for(let key of set){     // 100, 4
        // if(set.has(key-1)){
        //     while(set.has(key-1)){
        //         set.delete(key+1);
        //         currentNum += 1; 
        //         count ++; 
        //     }
        // }
        if(set.has(key-1) === false){
            currentNum = key;  
            count = 1;
            while(set.has(currentNum+1)){
                set.delete(currentNum+1);
                currentNum += 1; 
                count ++; 
            }
            max = Math.max(count, max);
        }
    }
    return max;
};


// publica question : 
var longestConsecutive = function(nums) {
    
    // {100, 4, 200, 1, 3, 2}
    let obj = {};  //{100,4,200,1,3,2}
    for(let num of nums){
        if(obj[num] === undefined){
            obj[num] = 1;
        }else{
            obj[num]++;
        }
    }
    console.log(obj)  // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 2, '7': 1, '9': 1 }
    let max = 0;    // 
    let count = 1;    // 
    let currentNum; //  
    for(let key of Object.keys(obj)){     // 1
        if(obj[Number(key)-1] === undefined){
            
            currentNum = Number(key);  // 1  
            count = 1;   // 1
            while((currentNum+1) in obj){ 
                count += obj[currentNum+1];  // 1+1
                delete obj[currentNum+1];
                currentNum += 1;  // 2 
            }
            max = Math.max(count, max);  // 2
        }
    }
    return max;
};