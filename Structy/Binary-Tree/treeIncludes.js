// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// treeIncludes(a, "e"); // -> true
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// treeIncludes(a, "a"); // -> true
// test_02:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// treeIncludes(a, "n"); // -> false
// test_03:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

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

// treeIncludes(a, "f"); // -> true
// test_04:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

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

// treeIncludes(a, "p"); // -> false
// test_05:
// treeIncludes(null, "b"); // -> false


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// Depth First Search
// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeIncludes = (root, target) => {
    //   if root is null return 0
    //   if root matches the target return root
    //   make a stack to store nodes
    //   while stack is not empty
    //   take current node and check with target, if match return true
    //   add left and right of that current node to the stack
    //   at the end return false
      
      if(root === null) return false;
    //   if(root.val === target) return true;
      
      let stack = [root];
      while(stack.length > 0){
        let current = stack.pop();
        if(current.val === target) return true;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
      }
        return false;
};
    

// Breadth First Search:

// n = number of nodes
// Time: O(n^2)
// Space: O(n)
const treeIncludes = (root, target) => {
    //   if root is null return 0
    //   if root matches the target return root
    //   make a queue to store nodes
    //   while stack is not empty
    //   take current node and check with target, if match return true
    //   add left and right of that current node to the stack
    //   at the end return false
      
    if(root === null) return false;
    // if(root.val === target) return true;
      
    let queue = [root];
    while(queue.length > 0){
        let current = queue.shift();
        if(current.val === target) return true;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return false;
};

// recursive:
// time: O(n)
// space: O(n)
const treeIncludes = (root, target) => {
    //   base case return true if root is target
    //   return false if root is null
    //   return root.left or root.right
      
      if(root === null) return false;
      if(root.val === target) return true;
      return treeIncludes(root.left, target) || treeIncludes(root.right, target);
      
};