// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'x', 2);
// // a -> b -> x -> c -> d
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'v', 3);
// // a -> b -> c -> v -> d
// test_02:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// insertNode(a, 'm', 4);
// // a -> b -> c -> d -> m
// test_03:
// const a = new Node("a");
// const b = new Node("b");

// a.next = b;

// // a -> b

// insertNode(a, 'z', 0);
// // z -> a -> b 

const insertNode = (head, value, index) => {
    //   set prev to null
    //   set current to head
    //   while count is not eaqual to index 
    //   set current to current.next and prev to current
    //   after loop set prev next to new node an dnew node next to current next
    //   time: O(n), space: O(1)
    let newNode = new Node(value);
    if(index === 0){
    newNode.next = head;
    return newNode;
    } 
    let prev = null;
    let current = head;
    let count = 0;
    while(count !== index){
    count ++;
    prev = current;
    current = current.next;
    }
    prev.next = newNode;
    newNode.next = current;
    return head; 


    // OR: 
   
    // if (index === 0) {
    //     const newHead = new Node(value);
    //     newHead.next = head;
    //     return newHead;
    // }
    
    // let count = 0;
    // let current = head;
    // while (current !== null) {
    //     if (count === index - 1) {
    //     const next = current.next;
    //     current.next = new Node(value);
    //     current.next.next = next;
    //     }
        
    //     count += 1;
    //     current = current.next;
    // }
    // return head;
      

};
    

//   recursively: 
// n = number of nodes
// Time: O(n)
// Space: O(n)
const insertNode = (head, value, index, count=0) => {
    if(head === null) return;
    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = head;
      return newNode;
    }
    
     if (count === index - 1) {
      const next = head.next;
      head.next = new Node(value);
      head.next.next = next;
      return head;
    }
    
    insertNode(head.next, value, index, count+1);
    return head;
  };
  