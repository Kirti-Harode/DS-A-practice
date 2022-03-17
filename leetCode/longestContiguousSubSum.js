// You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. 
// Find the sums of all contiguous sub-arrays and return the max.

function largestContiguousSubsum(nums){
    let allSubs = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            allSubs.push(nums.slice(i, j+1));
        }
    }
    let AllSums = [];

    for(let i = 0; i < allSubs.length; i++){
        let sum = 0;
        for(let j = 0; j < allSubs[i].length; j++){
            sum += allSubs[i][j]
        }
        AllSums.push(sum);
    }
   
    // return AllSums;

    let max = 0; 
    for(let i = 0; i < AllSums.length; i++){
        if(AllSums[i] > max){
            max = AllSums[i];
        }
    }
    return max
}
// time complexity: O(n2), Space Complexity: 


function largestContiguousSubsum2(nums){
    largest_sum = nums[0];
    current_sum = nums[0];

    i = 1;
    while(i < nums.length){
        if(current_sum < 0) current_sum = 0;

        current_sum += nums[i];

        if(current_sum > largest_sum) largest_sum = current_sum;

        i++;
    }
    return largest_sum;

}

list = [2, 3, -6, 7, -6, 7]
console.log(largestContiguousSubsum2(list));