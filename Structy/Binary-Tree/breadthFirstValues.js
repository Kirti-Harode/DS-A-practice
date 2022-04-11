// breadth first values
// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

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

// breadthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'd', 'e', 'f']
// test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// breadthFirstValues(a); 
// //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// test_02:
// const a = new Node('a');

// //      a

// breadthFirstValues(a); 
// //    -> ['a']
// test_03:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //    /  \
// //   x    d
// //         \
// //          e

// breadthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'x', 'd', 'e']
// test_04:
// breadthFirstValues(null); 
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
// Time: O(n2) because of shift , assume effieceint queue O(n)
// Space: O(n)

const breadthFirstValues = (root) => {
    //   if root is null return empty arr
    //   create an empty result arr
    //   create a queue arr to store and remove nodes
    //   while queue is not empty
    //   use shift to remove from the front store as current
    //   add this current val to the result arr
    //   if curr left and right add them to the queue
    //   return reuslt arr
      if(root === null) return [];
      let allVals = [];
      let queue = [root];
      while(queue.length > 0){
        let current = queue.shift();
        allVals.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
      return allVals;
};

// no recursive because we need queue to solve it and recursion uses stack to store info.


