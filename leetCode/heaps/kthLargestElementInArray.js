// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104


var findKthLargest = function(nums, k) {
    //     sort the arr and return k-1 index num
        
        // let sorted = nums.sort((a,b) => b - a);
        // return sorted[k-1];
        
        
    //     create min heap for k elements from array using priority queue
    //     start loop from i = k and for each num check 
    //     if current num is smaller than the top of the min heap then just continue 
    //     else chenge top of the ele in min heap to the current num
    //     by polling out 
    
        // not working yet
    let minHeap = [];
    for(let i = 0; i < k; i++){   //O(k)
        minHeap.push(nums[i]);
    }
    if(k === nums.length ){
        minHeap.sort((a,b) => a-b);    //O(klogk)
        
    }
    
    for(let i = k; i < nums.length; i++){  // O(n-k)
        minHeap.sort((a,b) => a-b);    //O(klogk)
        
        if(minHeap[0] > nums[i]){
            continue;
        }else{
            minHeap.reverse();   //O(k + k)
            minHeap.pop();
            minHeap.reverse();
            minHeap.push(nums[i]);
            
        }
    }
    
    console.log(minHeap);
    return minHeap[0]
};