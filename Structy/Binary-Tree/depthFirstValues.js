// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// depthFirstValues(a); 
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']
// test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /
// //   g

// depthFirstValues(a); 
// //    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
// test_02:
// const a = new Node('a');
// //      a
// depthFirstValues(a); 
// //    -> ['a']
// test_03:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //       \
// //        d
// //         \
// //          e

// depthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'd', 'e']
// test_04:
// depthFirstValues(null); 
// //    -> []

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// iterative: 

// n = number of nodes
// Time: O(n)
// Space: O(n)
const depthFirstValues = (root) => {
    //  creat an empty result arr
    //  create an stack to store and remove the nodes 
    //  while stack is not empty 
    //  remove last ele and push that val in result arr
    //  then check node.left and right ad add to the stack 
    //  return array
    if(root === null) return [];
      let allVals = []
      let stack = [root];  // stack LIFO push/pop
    while(stack.length > 0){
        let current = stack.pop();
        allVals.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return allVals;
};

// recursively: 
// n = number of nodes
// Time: O(n)
// Space: O(n)

const depthFirstValues = (root) => {
    //   base case root null return empty arr
    //   call depthFirstValues on root left and right
    //   store them
    //   concat root with left and right vals and return into an arr
      if(root === null) return [];
      let leftVals = depthFirstValues(root.left);    //  [b,d,e]
      let rightVals = depthFirstValues(root.right); //  [c,f]
      // return [root.val].concat(leftVals, rightVals);
      return [root.val, ...leftVals, ...rightVals];
};