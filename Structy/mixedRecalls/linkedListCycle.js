// linked list cycle
// Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = b; // cycle

// //         _______
// //       /        \
// // a -> b -> c -> d 

// linkedListCycle(a);  // true
// test_01:
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');
// const u = new Node('u');

// q.next = r;
// r.next = s;
// s.next = t;
// t.next = u;
// u.next = q; // cycle

// //    ________________
// //  /                 \
// // q -> r -> s -> t -> u 

// linkedListCycle(q);  // true
// test_02
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d 

// linkedListCycle(a);  // false
// test_03:
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');
// const u = new Node('u');

// q.next = r;
// r.next = s;
// s.next = t;
// t.next = u;
// u.next = t; // cycle

// //                   __
// //                 /   \
// // q -> r -> s -> t -> u 

// linkedListCycle(q);  // true
// test_04:
// const p = new Node('p');

// // p

// linkedListCycle(p); // false
// test_05:
// linkedListCycle(null); // false

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// using a Set:
// n = number of nodes
// Time: O(n)
// Space: O(n)
const linkedListCycle = (head) => {
    let visited = new Set();
    let current = head;
    while(current !== null){
      
      if(visited.has(current)){
        return true;
      }else{
        visited.add(current);
      }
      current = current.next;
    }
    return false;
    
  
};

// using two pointers
// n = number of nodes
// Time: O(n)
// Space: O(1)
const linkedListCycle = (head) => {
    let fast = head;
    let slow = head;
    let firstIteration = true;
    while(fast !== null && fast.next !== null){  //!(fast === null || fast.next === null)
      if(fast === slow && !firstIteration) return true;
      fast = fast.next.next;
      slow = slow.next;
      firstIteration = false;
    }
    return false;
    
  
};