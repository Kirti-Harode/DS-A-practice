// Given an array of integer arr where each element is at most k places away from its sorted position, code an efficient function
// sortKMessedArr that sorts arr. For instance, for an input arr of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located 
// at either index 4,5,6,7 or 8 in the input array.
// Analyze the time and space complexities of your solution.

// Example: 
// Input: arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Constraints: 
// 1 <= arr.length <= 100
// 0 <= k <= 20

function sortKMessedArr(arr, k){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let min = Infinity;
        let end = i+k;
        // if(end < arr.length){
            for(let j = i; j <= end; j++){
                if( arr[j] > result[result.length-1]  && arr[j] < min) min = arr[j];
            }
        // }
       
        result.push(min);
    }
    console.log(result);
}

let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
let k = 2
sortKMessedArr(arr, k);

// function findMin()