//return min positive (greater than 0) int from the given array

// A = [1,2,6,4,3] => 5
// A = [1,2,3]  => 4
//A = [-1,-3]   => 1


function minPositiveInt(arr){
    let set = new Set(arr);
    // console.log(set)
    for(let i = 1; i <= arr.length+1; i++){
        // console.log(i)
        if(!(set.has(i))) return i;
    }
}

let arr = [1,2,3]

console.log(minPositiveInt(arr))