// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105



var insert = function(intervals, newInterval) {   //[[1,2],[3,5],[6,7],[8,10],[12,16]],   [4,8]
    let i = 0;     // 0,  4
    let result = []  // [[1,2], [3,10], [12,16]]
    
    while(i < intervals.length && intervals[i][1] < newInterval[0]){    // go upto the interval which is less then the new one
        result.push(intervals[i]);
        i++;
    } // after this i will poin to the interval where you can insert it
    
    while(i < intervals.length && intervals[i][0] <= newInterval[1]){ // creat a new interval from inserting the newinsterval and other overlaps after that
        newInterval[0] = Math.min(newInterval[0], intervals[i][0] );  // [3,10]
        newInterval[1] = Math.max(newInterval[1], intervals[i][1] );
        i++;
    }
    
    result.push(newInterval);  //add combined overlapped and new interval in there
    //after inserting the combined interval i will point to the remaing non overlaping intervals so just push them in
    while(i< intervals.length){
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};