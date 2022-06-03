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
        
        while(this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]){
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

            if(this.data[rightChildIndex] !== undefined && this.data[smallestChildIndex] > this.data[rightChildIndex]){
                smallestChildIndex = rightChildIndex;
            }

            if(this.data[currentIndex] > this.data[smallestChildIndex]){
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
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
heap.push(69);

console.log(heap.data.join(','));   // 5,25,40,70,90,44

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('Top 5 items:' , a); // Top 5 items: [ 5, 40, 25, 44, 69 ]

console.log(heap.data.join(',')); // remaining 70,90