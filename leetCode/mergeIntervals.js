// 56. Merge Intervals
// Medium

// 13359

// 518

// Add to List

// Share
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
    
    // let's sort the intervals array by start times first - O(nlogn)
    // create output array
    // iterate through, and check current endpoint (current[1]) and compare with next start point (next[0])
    // if next[0] < current[1], then we can push into output array [current[0], next[1]]
    // do we need to loop through this again?
    //         if our output length doesnt change, then we know we have merged all intervals
    //          if we do it this way, it is O(n^2)
    // maybe we can mutate the array in place instead of using a while loop
    //      potentially messy with index changes
    
    
    // stack: LIFO - last in, first out
    // stack could be useful in simplifying this problem
    
    
     // time complexity: 
        // n = n is input length
        // sort = O(nlogn), while loop: O(n)
        // total time: O(nlogn)
    //  space: O(n) for stack
    let sorted = intervals.sort((a,b) => ( a[0] - b[0])); 
    let stack = [sorted[0]];
    
    let i = 1;
    while( i < sorted.length){
        let current = sorted[i];
        let prev = stack[stack.length-1];
        
        if(prev[1] >= current[0]){
            if (current[1] > prev[1]) {
                stack[stack.length-1] = ([prev[0], current[1]]);
            } else{
                stack[stack.length-1] = ([prev[0], prev[1]]);
            }  
           
        }else{
            stack.push(current);
        }
        i++;
    }
    
    return stack;
};