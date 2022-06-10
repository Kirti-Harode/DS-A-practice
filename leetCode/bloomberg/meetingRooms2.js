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
    for(let ele of intervals){
        startTimes.push(ele[0]);
        endTimes.push(ele[1]);
    }
    
    startTimes = startTimes.sort((a,b) => a-b);
    endTimes = endTimes.sort((a,b) => a-b);
    
    let count = 0;
    let max = 0;
    let start = 0;
    let end = 0;
    
    while(start < startTimes.length){
        if(startTimes[start] < endTimes[end]){
            count ++;
            start ++;
        }else{
            count --;
            end ++;
        }
        max = Math.max(count, max);
    }
    return max;
};