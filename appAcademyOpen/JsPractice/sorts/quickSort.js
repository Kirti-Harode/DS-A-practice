// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

const defaultCallback = function(a, b){
    if( a > b){
        return 1;
    }else if( a < b){
        return -1;
    }else{
        return 0;
    }
}

Array.prototype.quickSort = function(callback) {
    // time: O(n2)
    // space: O(logn)
    if(callback === undefined){
        callback = defaultCallback;
    }
   
    if(this.length <= 1) return this;
    let pivot = this[0];
    let left = [];
    let right = [];

    for(let i = 1; i < this.length; i++){
        if(callback(this[i], pivot) === -1){
            left.push(this[i]);
        }else{
            right.push(this[i]);
        }
    }
    let sorted = left.quickSort(callback).concat(pivot, right.quickSort(callback));
    return sorted;
}