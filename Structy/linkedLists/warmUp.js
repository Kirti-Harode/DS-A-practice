// manual linkedlist =>

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;


// A -> B -> C -> D -> Null;

//  A is head and D is tail

const printLinkedList = (head) => {
    let current = head;
    while(current !== null){    //don't current.nest !== null otherwise it will not print last node
        console.log(current.val)
        current = current.next;
    }
}

printLinkedList(a);


// recursively: 

const printLinkedList = (head) => {
    if(head === null) return;
    console.log(head.val);
    printLinkedList(head.next);
};


