// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 2); // 'c'
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 3); // 'd'
// test_02:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 7); // null
// test_03:
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 0); // 'banana'
// test_04:
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 1); // 'mango'



const getNodeValue = (head, index) => {

// BRUTE FORCE:
    // create an empty arr
    // set var CURRENT TO HEAD
    // loop while current is not null
    // add val to the arr and set current to next node
    // iterate in the arr and return val at given index
    //   time complexity: O(n)
    //   Space O(n)
    // n = number of nodes
    let values = [];
    let current = head;
    while(current !== null){
        values.push(current.val);
        current = current.next;
        
    }
    if(values[index] !== undefined){
        return values[index]
    }else{
        return null;
    }

// Iterative:
    // time: O(n)
    // space: O(1)
    let count = 0;
    let current = head;
    while(current !== null){
      if(count === index){
        return current.val;
      }
      current = current.next;
      count ++;
    }
    return null;

// Recursively: 
    //   n = number of nodes
    // Time: O(n)
    // Space: O(n)
    if(head === null) return null;
    if(index === 0) return head.val;
    return getNodeValue(head.next, index-1);

};
