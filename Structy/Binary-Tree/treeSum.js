// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

// test_00:
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// treeSum(a); // -> 21
// test_01:
// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      1
// //    /   \
// //   6     0
// //  / \     \
// // 3   -6    2
// //    /       \
// //   2         2

// treeSum(a); // -> 10
// test_02:
// treeSum(null); // -> 0

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// iterative: Depth first

// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeSum = (root) => {
    //  if root is null return 0
    //   create an sum var assign it to zero
    //   make a stack to store nodes
    //   while stack is not empty
    //   take current node and add its val to sum
    //   add left and right of that current node to the stack
      
      if(root === null) return 0;
      let stack = [root];
      let sum = 0;
      
      while(stack.length > 0){
        let current = stack.pop();
        sum += current.val;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
        
      }
      return sum;
};



// recursive: Depth first

// n = number of nodes
// Time: O(n)
// Space: O(n)
const treeSum = (root) => {
    if(root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
};

const treeSum = (root, sum=0) => {
  if(root === null) return 0;
  sum += root.val
  sum += treeSum(root.left);
  sum += treeSum(root.right);
 
  return sum
};


// iterative: Breadth first

// n = number of nodes
// Time: O(n^2)
// Space: O(n)
const treeSum = (root) => {
      if(root === null) return 0;
      let queue = [root];
      let sum = 0;
      
      while(queue.length > 0){
        let current = queue.shift();
        sum += current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        
      }
      return sum;
};
    