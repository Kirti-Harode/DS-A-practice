// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let count = 0;

    for(let i = 0;  i < intervals.length-1; i++){   //[[1,100],[1,11],[1,11],[11,22]]
        let currentInterval = intervals[i];  // [1,11]
        let nextInterval = intervals[i+1];   // [2,12]
        
        if(currentInterval[1] > nextInterval[0]){ 
            if(currentInterval[1] < nextInterval[1]){
                intervals[i+1] = intervals[i];
            }
            count++;
        }
    }
    return count;
};