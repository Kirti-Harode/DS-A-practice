// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]
function doubler(arr){
    let result = []
    for(let i = 0; i< arr.length; i++){
        result.push(arr[i]*2)
    }
    return result
}

// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.
function factors(num){
    let facts = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            facts.push(i);
        }
    }
    return facts;
}
// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function(){
    let flattnedArr = [];
    for(let i = 0; i < this.length; i++){
        if(Array.isArray(this[i])){
            flattnedArr = flattnedArr.concat(this[i].myFlatten());
        }
        else{
            flattnedArr.push(this[i]);
        }
    }
    return flattnedArr;
}


// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

function primes(num){
    let primeNums = [];
    let i = 2;
    while(primeNums.length < num){
        if(isPrime(i)) primeNums.push(i);
        i++;
    }
    return primeNums;
}

function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return true
}
// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.
Array.prototype.twoSum = function(){
    let obj = {};
    result = []
    for(let i = 0; i < this.length; i++){
        if(obj[0 - this[i]] !== undefined){
            result.push([obj[0-this[i]], i]);
        }
        obj[this[i]] = i;
    }
    return result;
}
// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.
function myFind(array, callback){
    for(let i =0; i < array.length; i++){
        if(callback(array[i])) return array[i];
    }
    return undefined;
}
// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`
String.prototype.mySlice = function(start, end) {
    let slice = "";
  
    if (typeof end === 'undefined') {
      end = this.length;
    }
  
    for (let i = start; i < end && i < this.length; i++) {
      slice += this[i];
    }
    return slice;
  };
// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]
function transpose(arr){
    let transposed = [];
    let newRow = arr[0].length;
    let newCol = arr.length;
    for(let i = 0; i < newRow; i++){
        transposed.push(Array(newCol).fill(null))
    }

    let row = 0;
    let col = 0;
    let count = 0;
    while(count < newRow*newCol){
        let val = arr[row][col];
        transposed[col][row] = val;
        count ++;
        if(col === arr[0].length-1){
            row ++;
            col = 0;
        }else{
            col ++;
        }
    }
    return transposed;
}
// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.

// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]
Array.prototype.myRotate = function (times = 1) {
    let dup = this.slice(0);
    if(times > 0){
        let i = 0; 
        while(i < times){
            ele = dup.shift();
            dup.push(ele);
            i++;
        }
    }else{
        let i = 0; 
        while(i < (times * -1)){
            ele = dup.pop();
            dup.unshift(ele);
            i++;
        }
    }
    return dup;
}
// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

