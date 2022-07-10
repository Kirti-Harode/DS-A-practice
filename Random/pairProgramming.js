// Write a function medianSort() that accepts one argument: an Array. The elements of this Array
// can be either numbers or arrays of numbers. The function should return the initial array sorted
// by the numbers or the median values of the arrays of numbers.

// For example: 
// medianSort( [3, [-2, 4, 9] ] ) ---> [3, [-2, 4, 9]]
// the median of [-2, 4, 9] is 4, so we should sort that array after the 3

// medianSort( [ [12, 9, 1, 25], 4] ) ---> [4, [12, 9, 1, 25] ]
// the median of [12, 9, 1, 25] is 10.5, and 10.5 is greater than 4

// medianSort( [ [2.4, 0.2, 9.8], 0, [-1], [-9, -4] ] ) ---> [ [-9, -4], [-1], 0, [2.4, 0.2, 9.8] ]
// the median of [2.4, 0.2, 9.8] is 2.4, the median of [-1] is -1. the median of [-9, -4] is -6.5
// therefore, the sorted order of the medians is [-6.5, -1, 0, 2.4]

// []
// [8,5,[1,2,3], [0,3,4]]=> [[1,2,3]]

// {median : [0,2,4]}
// [8,5,2,3] => sort [[0,2,4],3,5,8]

//n = array.length
// m = ele array.length
//t: O(mnlogm);
// s : O(n)+O(n)
function medianSort(array){   // [ [2.4, 0.2, 9.8], 0, [-1], [-9, -4] ]
    let medianHash = {};   // {"2.4" : [2.4, 0.2, 9.8], '-1' : [-1], '-6.5': [-9, -4]}
    let result = [];    // [2.4, 0, -1, -6.5]
    for(let ele of array){    // O(nmlogm)
        if (Array.isArray(ele)){
            let median = findMedian(ele); // 2.4, -1, -6.5
            medianHash[median] = ele;
            result.push(median); 
        }else{
            result.push(ele);
        }
    }

    result.sort((a,b) => a-b);  //[-6.5, -1, 0, 2.4]  // O(nlogn)

    for(let i = 0; i < result.length; i++){  // O(n)
        if (result[i] in medianHash){
            result[i] = medianHash[result[i]];
        }
    }

    return result;  // [[-9, -4], [-1], 0, [2.4, 0.2, 9.8]]
}

function findMedian(arr){   // [2.4, 0.2, 9.8] , [-9, -4] // O(mlogm)
    let input = arr;
    input.sort((a,b) => a-b);  // [0.2, 2.4, 9.8] , [-4, -9]
    let mid = Math.floor(input.length/2);  // 2/2 => 1

    if(input.length % 2 === 0){
        return Math.floor(input[mid] + input[mid-1] )/ 2 ;  
    }else{
        return input[mid]; // 2.4, -1
    }
}


console.log(medianSort( [ [2.4, 0.2, 9.8], 0, [-1], [-9, -4] ] ));