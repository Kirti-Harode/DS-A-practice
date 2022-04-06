
// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

const defaultCallback = function(a, b){
    if( a > b){
        return 1;
    }else if( a < b){
        return -1;
    }else{
        return 0;
    }
}

Array.prototype.bubbleSort = function(callback){
    // time: O(n2)
    // space: O(1) or O(n)
    if(callback === undefined){
        callback = defaultCallback;
    }
    let sortedArr = this.slice();
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < sortedArr.length-1; i++){
            if(callback(sortedArr[i], sortedArr[i+1]) === 1) {
                [sortedArr[i], sortedArr[i+1]] = [sortedArr[i+1], sortedArr[i]];
                sorted = false;
            }
        }
    }
    return sortedArr;
}