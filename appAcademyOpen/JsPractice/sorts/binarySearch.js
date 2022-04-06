// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
function binarySearch(sortedArray, target){
    // look for mid if it matches the target return its index
    // if target is graeter than mid than search right else search left
    // base case empty array return nil

// recursive:
    // time: O(logn)
    // space: O(logn)
    if(sortedArray.length === 0) return -1;

    let mid = Math.floor(sortedArray.length/2);
    if(sortedArray[mid] === target) return mid;

    let left = sortedArray.slice(0, mid);
    let right = sortedArray.slice(mid+1)
    if(sortedArray[mid] > target){
       return binarySearch(left, target);
    }else{
        if(binarySearch(right, target) === -1){
            return -1;
        }else{
            return (mid + 1 + binarySearch(right, target));
        }
    }

}


// iterative:
    // time: O(logn)
    // space: O(1)
function binarySearch(sortedArray, target){
    let left = 0;
    let right = sortedArray.length-1;

    while(left <= right){
        let mid = Math.floor(left + right/2);
        
        if(target === sortedArray[mid]) {
            return mid;
        }
        else if(target < sortedArray[mid]) {
            right = mid-1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}