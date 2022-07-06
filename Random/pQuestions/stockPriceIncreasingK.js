// #2 it gives you array of integers. the integers are the stock prices for a month. 
// You have have a second argument of k which represents how many months they are looking at. 
// So for the original array, you find how many subintervals of length k have strictly increasing stock prices.
//  For example for array [9,4,5,6,7,8,1] with k of 3, the answer would be 3.
//   You have 3 subintervals of length 3 that have strictly increasing numbers. 
// it would be intervals [4,5,6], [5,6,7], and [6,7,8]


// function subIntervalCount(array, k){   // [9,4,5,6,7,8,1]
//     if(array.length === 1 && k === 1){
//         return 1;
//     }
//     let count = 0;
//     let i = 0;   // 1
//     let j = 1;   // 2
//     let currentNum;

//     while(j < array.length){
//         if(array[j] > array[i]){  // 
//             currentNum = array[i];   // 4
//             while(array[j] > currentNum){ 
//                 currentNum = array[j] // 6
//                 if((j - i + 1) === k){ // 3-1+1
//                     count ++; // 1
//                     i++;
//                 }
//                 j ++;  // 4
//             }
//         }else{
//             i = j;
//             j ++;
//         }
//     }
//     return count;
// }


function subIntervalCount(array, k){   // [9,4,5,6,7,8,1]
    if(k === 1){
        return array.length;
    }
    let count = 0;
    let i = 0;   
    let j = 1;   
  
    while(j < array.length){
        let prev = array[j-1]
        if(array[j] > prev){  
            if((j - i + 1) === k){ 
                count ++; 
                i++;
            }
            j ++;  
            
        }else{
            i = j;
            j ++;
        }
    }
    return count;
}

// let arr = [9,4,5,6,7,8,1];
let arr = [9,4,8,9,12,15,1];
// let arr = [9];


let k  = 3;
console.log(subIntervalCount(arr, k));
