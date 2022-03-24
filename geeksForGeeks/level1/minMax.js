// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.



class Solution{
    getMinMax(arr,n){
        let min = arr[0];
        let max = arr[0];
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min) min = arr[i];
        }
        
        return [min, max];
    }
    
   
}