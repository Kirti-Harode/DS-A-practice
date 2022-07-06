// Given an array of bad numbers and a range of integers, determine  the longest segment of integers within the range 
// that does not include any bad numbers.

//  badNumbers[] size n = 4
//  badNumbers = [ 5, 4, 2, 15 ] 
//  lower = 1
//    upper = 10


function goodSegment(badNumbers, lower, upper) {  // [ 2, 4, 5, 15 ]
    badNumbers.sort((a,b) => a-b);
    console.log(badNumbers);
    
    let low = lower; // 2
    let max = 0;  // 0
    for(let i = 0; i < badNumbers.length; i++){
        if(badNumbers[i] === low){
            low = badNumbers[i]+1;
        }else if(badNumbers[i] > low){ // 7>3
            let high = badNumbers[i]-1; // 7-1 6
            if(high === upper) break;
            if(high > upper) high = upper;
            if(high < upper && i === badNumbers.length-1){
                high = upper;
                low = badNumbers[i] + 1;
            }
            let range = high - low + 1; // 
            max = Math.max(range, max);
            low = badNumbers[i] + 1;
            
        }
    }
    return max;
}