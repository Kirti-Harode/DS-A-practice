// #1 was a problem similar to longest increasing subsequence. 
// The difference is that you want to find the length of the longest subsequence that is continuous and 
// it's doesn't necessarily have to be in order in the original array. For example for an array of [5,4,2,1,7,9,3,5] 
// the longest subsequence would be length 6 because its the subsequence of [1,2,3,4,5,5].

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