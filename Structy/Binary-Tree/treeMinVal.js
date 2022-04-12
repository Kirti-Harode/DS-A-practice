// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

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

// treeMinValue(a); // -> -2
// test_01:
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       5
// //    /    \
// //   11     3
// //  / \      \
// // 4   14     12

// treeMinValue(a); // -> 3
// test_02:
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     /       \
// //    -2       -2

// treeMinValue(a); // -> -13
// test_03:
// const a = new Node(42);

// //        42

// treeMinValue(a); // -> 42


const treeMinValue = (root) => {
    //   Breadth First: 
    //   time: O(n^2)
    //   space: O(n)
      
      
    //  set min to -infinity
    //  create a queue/stack to store the nodes
    //  pop every node's val and then check if min is greater or less
    //  if less then assign min to that val
    //  return min at the end
      
      let min = root.val; //or Infinity
      let queue = [root];
      while(queue.length !== 0){
        let current = queue.shift();
        if(current.val < min) min = current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
      return min;
      
      
      // recursively: 
      // Depth First: time:O(n), space: O(n)
      
    //   return root.val if there is no left and right
    //   return min of root.left and right recursive call
      if(root === null) return Infinity;
      return Math.min(root.val,treeMinValue(root.left), treeMinValue(root.right));
      
    };