//  SOMETIMES IT IS NECESSARY TO VENTURE A SIGNAL BY FREQUENCY, EXAMPLE to REDUCE NOISE OUTSIDE THE EXPECTED FREQUENCY RANGE.
//   FILTERS CAN BE STACKED, ALLOWING ONLY THE FREQUENCIES WITHIN THE RANGE ALLOWED BY THE FILTERS TO GET THROUGH. 
//   EXAMPLE 3 FILTERS WITH RANGE OF 10 TO 17 13 to 15 AND 13 TO 17 WILL ONLY ALLOWS SIGNALS BETWEEN 13 AND 15 THROUGH. 
//   THE ONLY RANGE That all filters overlap in 13 to 15 deep Beard the only range that all filters overlap is 13 to 15. Given and signals frequencies
// And a series of M filters that lead to frequencies in the range from x to y inclusive, 
// determine the number of signals that will get through the filters. 
// There will be only one range where all the filters overlap.

// Frequencies = [8, 15, 14, 16, 21 ]

// Filtersranges = [[10, 17], [13, 15], [13, 17]]

function countSignals(frequencies, filterRanges) {
    // Write your code here
    let min = Infinity;
    let max = -Infinity;
    
    for(let ele of filterRanges){
        if (ele[0] > max) max = ele[0];
        if(ele[1] < min) min = ele[1];
    }
    
    let low = max;
    let high = min;
    let count = 0;
    for(let ele of frequencies){
        if(ele >= low && ele <= high) count ++;
    }
    return count;
}