// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1
 

// Constraints:

// 1 <= intervals.length <= 104
// 0 <= starti < endi <= 106


var minMeetingRooms = function(intervals) {
    let startTimes = [];
    let endTimes = [];
    
    for(let interval of intervals){
        startTimes.push(interval[0]);
        endTimes.push(interval[1]);
        
    }
    startTimes.sort((a,b) => a-b);
    endTimes.sort((a,b) => a-b);
  
    let count = 0;
    let max = 0;
    
    let start = 0;
    let end = 0;
    while(start < startTimes.length){
        if(startTimes[start] < endTimes[end]){
            count ++;
            start ++;
        }else if(endTimes[end] <= startTimes[start]){
            count --;
            end ++;
        }
        max = Math.max(count, max);
    }
    return max;
};