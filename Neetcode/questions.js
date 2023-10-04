//valid Palindrome: 
// uppercase -> lowercase
// remove non-alphanumeric numbers

// two pointers
// i from index 0, j from last index: length-1
// match both values at i and j => only if alphanum
// till i < j

// length is 1 that is a palindrome

const palindrome = (string) => {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let i = 0;
    let j = string.length - 1;
    while( i < j){
        while(i < j && !(chars.includes(string[i].toLowerCase()))){
            i ++;
        }
        while(i < j && !(chars.includes(string[j].toLowerCase()))){
            j--;
        }

        if(i < j && string[i].toLowerCase() !== string[j].toLowerCase()){
            return false;
        }
        i++;
        j--;
    }

    return true;
}
// console.log(palindrome("A man, a plan, a canal: Panama"));

// two sum 2 sorted array

// 1 indexed
// incresing order
// target
// [index1, index2]

// constant spce

function twoSum2(numbers, target){  // [2,7,11,15], 9
    let i = 0;                     // 0
    let j = numbers.length-1;      // 3, 2, 1
 
    while(i < j){
        let sum = numbers[i] + numbers[j]; // 2+15, 2+11, 7+2

        if(sum > target){   // 17 > 9, 13 > 9, 
            j --;           // 2, 1
        }else if(sum < target){
            i++;
        }else{
            return [i+1, j+1]; // [1, 2]
        }
    }
}

// Container with mist water

// heights
// area = width * height => (j-i) * (height[j] or height[i])

function mostAreaOfWater (height) {
    let i = 0;
    let j = height.length-1;
    let maxArea = 0;

    while( i < j){
        let width = j - i;
        let currentArea =  width * Math.min(height[i], height[j]);

        if(currentArea > maxArea){
            maxArea = currentArea;
        }

        if( height[i] <= height[j]){
            i ++ ;
        }else{
            j--;
        }
    }

    return maxArea;
}

console.log(mostAreaOfWater([1,8,6,2,5,4,8,3,7]));
