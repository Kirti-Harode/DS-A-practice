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

    push(key){
        this.data[this.data.length] = key;   //insert at the end, increase the length of the array
        this.heapifyUp();
    }
    
    heapifyUp(){
        let currentIndex = this.data.length-1;

        while(this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
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
            if(this.data[rightChildIndex] !== undefined && this.data[rightChildIndex] > this.data[leftChildIndex]){
                biggestChildIndex = rightChildIndex;
            }

            if(this.data[currentIndex] < this.data[biggestChildIndex]){
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            }else{
                return;
            }
        }
    }
}

let heap = new Heap();   
console.log(heap);    // Heap { data: [] }
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(','));   // 90,70,44,5,40,25

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('Top 5 items:' , a); // Top 5 items: [ 90, 70, 44, 40, 25 ]

console.log(heap.data.join(',')); // remaining 5