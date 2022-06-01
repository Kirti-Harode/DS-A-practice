function getMergedIntervals(intervals) {
    // sort the intervals in ascending order
    // compare the end of  ele to next ele's start 
    // if next ele start is less than the prev ele end
    // merge both and create a new interval
    // push it in the result's arr
    
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    console.log(intervals)
    let stack = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++){
        const [prevStart, prevEnd] = stack[stack.length-1];
        const [currentStart, currentEnd] = intervals[i];
        
        if(currentStart <= prevEnd){
            stack.pop();
            if(prevEnd > currentEnd){
                stack.push([prevStart, prevEnd]);
            }else{
                stack.push([prevStart, currentEnd]);
            }
            
        }else{
            stack.push(intervals[i]);
        }
    }
    
    return stack;
}