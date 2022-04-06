
// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. 
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.
const defaultCallback = function(a, b){
    if( a > b){
        return 1;
    }else if( a < b){
        return -1;
    }else{
        return 0;
    }
}
//  time: O(n*Log n)
// space: O(n)

Array.prototype.mergeSort = function(callback){

if(callback === undefined){
    callback = defaultCallback;
}
if(this.length <= 1) return this; 

let mid = Math.floor(this.length/2);
let left = this.slice(0, mid).mergeSort(callback);
let right = this.slice(mid).mergeSort(callback);

return merge(left, right, callback);
}

function merge(left, right, callback){
let sorted = [];

while(left.length && right.length){
    if(callback(left[0], right[0]) === 1){
        sorted.push(right.shift());
    }else{
        sorted.push(left.shift());
    }
}
sorted = sorted.concat(left, right);
return sorted;
}
