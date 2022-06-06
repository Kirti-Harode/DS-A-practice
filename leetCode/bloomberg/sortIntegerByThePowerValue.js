// The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

// if x is even then x = x / 2
// if x is odd then x = 3 * x + 1
// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

// Return the kth integer in the range [lo, hi] sorted by the power value.

// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in a 32-bit signed integer.

// without heap:
// time:O(nlogn), space:O(n)
const customCompare = function(a, b){
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
var getKth = function(lo, hi, k) {
    
    let steps = [];
    
    for(let i = lo; i <= hi; i++){
        let count = 0;
        let num = i;
        while(num !== 1){
            if(num % 2 === 1){
                num = 3 * num + 1;
                
            }else{
                num = num / 2;
            }
            count ++;
        }
        steps.push([i, count]);
    }
    let sorted = steps.sort(customCompare);
    console.log(sorted)
 
    return sorted[k-1][0]
};

// using heap 

var getKth = function(lo, hi, k) {
    
    let steps = [];
    
    for(let i = lo; i <= hi; i++){
        let count = 0;
        let num = i;
        while(num !== 1){
            if(num % 2 === 1){
                num = 3 * num + 1;
                
            }else{
                num = num / 2;
            }
            count ++;
        }
        steps.push([i, count]);
    }
    console.log(steps)
   let maxHeap = new Heap();
    for(let sub of steps){
         if(maxHeap.size() < k){
            maxHeap.push(sub);
         }else if(maxHeap.peek()[1] < sub[1]){
             maxHeap.poll();
             maxHeap.push(sub)
         }
    }
   console.log(maxHeap)
    return maxHeap.data[k-1][0]
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
    push(key){
        this.data[this.data.length] = key;   //insert at the end, increase the length of the array
        this.heapifyUp();
    }
    
    heapifyUp(){
        let currentIndex = this.data.length-1;

        while(currentIndex !== 0 && this.data[currentIndex][1] >= this.data[this.getParentIndex(currentIndex)][1]){
            this.swap(currentIndex, this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(){
        let maxValue = this.data[0];    //since this is max heap, the max val is going to be on index 0 in the array
        this.data[0] = this.data[this.data.length-1];   //swap that by the last num
        this.data.length--;       // to delete the last num just decrement the arr size 
        this.heapifyDown(); 
        return maxValue;
    }

    heapifyDown(){
        let currentIndex = 0;

        while(this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
            let leftChildIndex = this.getLeftChildIndex(currentIndex);
            let biggestChildIndex = leftChildIndex;

            let rightChildIndex = this.getRightChildIndex(currentIndex);
            if(this.data[rightChildIndex] !== undefined && this.data[rightChildIndex][1] > this.data[leftChildIndex][1]){
                biggestChildIndex = rightChildIndex;
            }

            if(this.data[currentIndex][1] <= this.data[biggestChildIndex][1]){
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            }else{
                return;
            }
        }
    }
}