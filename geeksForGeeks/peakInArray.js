// An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
// Given an array arr[] of size N, find the index of any one of its peak elements.
// Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. 


// Example 1:

// Input:
// N = 3
// arr[] = {1,2,3}
// Output: 2
// Explanation: index 2 is 3.
// It is the peak element as it is 
// greater than its neighbour 2.
// Example 2:

// Input:
// N = 2
// arr[] = {3,4}
// Output: 1
// Explanation: 4 (at index 1) is the 
// peak element as it is greater than 
// its only neighbour element 3.
 

// Your Task:
// You don't have to read input or print anything. Complete the function peakElement() which takes the array arr[] and its size N as input parameters and return the index of any one of its peak elements.

// Can you solve the problem in expected time complexity?

 

// Expected Time Complexity: O(log N)
// Expected Auxiliary Space: O(1)



// get mid index
// base case if length is 0 return -1
// check if element at mid is greater than left and right ele, if true return index
// slice left and right half
// search again where num is grater than num at mid index
// not found then search the other half

class Solution {
    
    peakElement(arr, n)
     {
         if(arr.length === 0) return -1;
         let mid = Math.floor(arr.length/2);
         let left = arr.slice(0, mid);
         let right = arr.slice((mid+1), arr.length);
         
         if(arr[mid] < right[0] && arr[mid] > left[left.length-1]){
             return mid;
         }
         if(arr[mid] < left[left.length-1]){
             return  this.peakElement(left, left.length);
         }
         else{
             if(this.peakElement(right, right.length) === -1){
                 return -1
             }else{
                 return (mid+1+ this.peakElement(right, right.length));
             }
         }
     }
 }