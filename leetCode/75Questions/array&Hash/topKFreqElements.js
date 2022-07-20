// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


// time : O(nlogn)
// space : O(n)
var topKFrequent = function(nums, k) {
    let freq = {};
    
    for(let num of nums){
        if(freq[num]){
            freq[num] ++;
        }else{
            freq[num] = 1;
        }
    }
    
    let entries = Object.entries(freq);
    entries.sort((a,b) => b[1]-a[1]);
    
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(entries[i][0]);
    }
    return res;
};

//Using bucket sort O(n + k)

var topKFrequent = function(nums, k) {
    let map = new Map();
    let res = [];
    let bucket = Array.from({ length: nums.length + 1 }, () => []);
    
    for(let num of nums){
        map.set(num, (map.has(num) ? 1+map.get(num) : 1));
    }
    
    for(let [key,val] of map.entries()){
        bucket[val].push(key);
    }
    
    for(let i = bucket.length-1; i >= 0; i--){
        if(bucket[i].length  > 0){
            for(let n of bucket[i]){
                res.push(n);
                
                if(res.length === k){
                    return res;
                }
            }
        }
    }
    // console.log(map)
};

// Heap: not working properly : O(n+klogk)
var topKFrequent = function(nums, k) {
    let freq = {};
    
    for(let num of nums){
        if(freq[num]){
            freq[num] ++;
        }else{
            freq[num] = 1;
        }
    }
    
    let entries = Object.entries(freq);
    let minHeap = new Heap();
    
    for(let entry of entries){
        if(minHeap.size() < k){
            minHeap.push(entry);
        }else if(minHeap.peek()[1] < entry[1]){
            minHeap.poll;
            minHeap.push;
        }
    }
    
  console.log(minHeap.data);
    let res = [];
    for(let entry of minHeap.data){
        res.push(entry[0]);
    }
    return res;
};

class Heap {
    constructor(){
        this.data = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i){
        return i*2+1;
    }

    getRightChildIndex(i){
        return i*2+2;
    }

    swap(i1, i2){
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }
    size(){
        return this.data.length;
    }
    peek(){
        return this.data[0];
    }
    push(val){
        this.data[this.data.length] = val;
        // this.heapifyUp();
        // this.data.sort(this.customCompare);
    }

//     heapifyUp(){
//         let currentIndex = this.data.length-1;
        
//         while(currentIndex > 0 && this.data[currentIndex][1] < this.data[this.getParentIndex(currentIndex)][1]){
//             this.swap(currentIndex, this.getParentIndex(currentIndex));
//             currentIndex = this.getParentIndex(currentIndex);
//         }
//     }

    poll(){
        let minValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length --;
        // this.heapifyDown();
        // this.data.sort(this.customCompare);
        return minValue;
    }

//     heapifyDown(){
//         let currentIndex = 0;
//         while(this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
//             let smallestChildIndex = this.getLeftChildIndex(currentIndex);
//             let rightChildIndex = this.getRightChildIndex(currentIndex);

//             if(this.data[rightChildIndex] !== undefined && this.data[smallestChildIndex][1] > this.data[rightChildIndex][1]){
//                 smallestChildIndex = rightChildIndex;
//             }

//             if(this.data[currentIndex][1] > this.data[smallestChildIndex][1]){
//                 this.swap(currentIndex, smallestChildIndex);
//                 currentIndex = smallestChildIndex;
//             }else{
//                 return;
//             }
//         }
    // }
    
    customCompare(a,b){
        if(a[1] < b[1]){
            return -1;
        }else if(a[1] > b[1]){
            return 1;
        }else{
            if(a[0] < b[0]){
                return -1;
            }else if(a[0] > b[0]){
                return 1;
            }else{
                return 0;
            }
        }
    }
}