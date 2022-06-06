// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

// Constraints:

// 1 <= words.length <= 500
// 1 <= words[i] <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]
 

// Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?


// brute force or javascript solution:
// time: O(nlogn)
// space: O(n + n)
const customCompare = (a, b) => {
    if(a[1] === b[1]){
        if(a[0] > b[0]){
            return 1;
        }else if(a[0] < b[0]){
            return -1;
        }else{
            return 0;
        }
    }else if(a[1] > b[1]){
        return -1;
    }else{
        return 1;
    }
}

var topKFrequent = function(words, k) {
    let freq = {};
    for(let word of words){
        if(freq[word] === undefined){
            freq[word] = 1;
        }else{
            freq[word] ++;
        }
    }
    let wordFreq = Object.entries(freq).sort(customCompare);
    console.log(wordFreq);
    let output = [];
    let i = 0;
    while(k > 0){
        output.push(wordFreq[i][0]);
        i++;
        k--;
    }
    return output;
}


// using heap: write few conditions in th heapifyup and down for ordering lexigraphically

// const customCompare = (a, b) => {
//     if(a[1] === b[1]){
//         if(a[0] > b[0]){
//             return 1;
//         }else if(a[0] < b[0]){
//             return -1;
//         }else{
//             return 0;
//         }
//     }else if(a[1] > b[1]){
//         return -1;
//     }else{
//         return 1;
//     }
// }

var topKFrequent = function(words, k) {
    let freq = {};
    for(word of words){
        if(freq[word] === undefined){
            freq[word] = 1;
        }else{
            freq[word] ++;
        }
    }

    let minHeap = new Heap();
    
    let wordFreq = Object.entries(freq);
    // console.log(wordFreq);
    for(let ele of wordFreq){
       
        if(minHeap.size() < k){
            // console.log(minHeap); 
            minHeap.push(ele);
            // console.log(minHeap.data[])
        }else if(minHeap.peek() < ele){
            minHeap.poll();
            minHeap.push(ele);
        }
    }
    console.log(minHeap)
    let output = [];
    for(let i = minHeap.data.length-1; i >= 0; i--){
        output.push(minHeap.data[i][0])
    }
    return output;
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
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.data.length-1;
        
        while(currentIndex !== 0 && (this.data[currentIndex][1] <= this.data[this.getParentIndex(currentIndex)][1])){
            
            // if(this.data[currentIndex][1] === this.data[this.getParentIndex(currentIndex)][1]){
            //     if(this.data[currentIndex][0] < this.data[this.getParentIndex(currentIndex)][0]){
            //             this.swap(currentIndex, this.getParentIndex(currentIndex));
            //             currentIndex = this.getParentIndex(currentIndex);
            //     }
            // }
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(){
        let minValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length --;
        this.heapifyDown();
        return minValue;
    }

    heapifyDown(){
        let currentIndex = 0;
        while(this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
            let smallestChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);

            if(this.data[rightChildIndex] !== undefined && this.data[smallestChildIndex][1] > this.data[rightChildIndex][1]){
                smallestChildIndex = rightChildIndex;
            }

            if(this.data[currentIndex][1] > this.data[smallestChildIndex][1]){
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
            }else{
                return;
            }
        }
    }
}