// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// test_00:
// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 7

// isUnivalueList(a); // true
// test_01:
// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(4);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 4

// isUnivalueList(a); // false
// test_02:
// const u = new Node(2);
// const v = new Node(2);
// const w = new Node(2);
// const x = new Node(2);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 2 -> 2 -> 2 -> 2

// isUnivalueList(u); // true
// test_03:
// const u = new Node(2);
// const v = new Node(2);
// const w = new Node(3);
// const x = new Node(3);
// const y = new Node(2);

// u.next = v;
// v.next = w;
// w.next = x;
// x.next = y;

// // 2 -> 2 -> 3 -> 3 -> 2

// isUnivalueList(u); // false
// test_04:
// const z = new Node('z');

// // z



// isUnivalueList(z); // true

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
    //   o = len of input
    //   time: O(n)
    //   space: O(1)
      let current = head;
      while(current !== null){
        if(current.val !== head.val) return false;
        current = current.next;
      }
      return true;
};
    

// recursively:

const isUnivalueList = (head, prevVal=null) => {
    // n = number of nodes
    // Time: O(n)
    // Space: O(n)
    if(head === null) return true;
    if(prevVal === null || prevVal === head.val) {
      return isUnivalueList(head.next, head.val);
    } else {
      return false;
    }
};


const isUnivalueList = (head) => {
 
  if(head === null) return false;
  // if(head.val !== head.next) return false;
  
  return head.val === isUnivalueList(head.next);
};
