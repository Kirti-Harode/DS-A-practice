// max root to leaf path sum
// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

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

// maxPathSum(a); // -> 18
// test_01:
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;

// //        5
// //     /    \
// //    11    54
// //  /   \
// // 20   15
// //      / \
// //     1  3

// maxPathSum(a); // -> 59
// test_02:
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(-13);
// const g = new Node(-1);
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
// // -3   0    -13
// //     /       \
// //    -1       -2

// maxPathSum(a); // -> -8
// test_03:
// const a = new Node(42);

// //        42

// maxPathSum(a); // -> 42


// iteratively: doesn't work correctly only passes 2 test cases becasue it doesn't go to left and then right path
const maxPathSum = (root) => { 
    //   create a stack to store left nodes
    //   create a stck to store right nodes
    //   var sum left and right assign them to 0
    //   at the end return max of sum right and left
      
    let sumLeft = 0;
    let leftStack = [root];
    while(leftStack.length !== 0){
    let current = leftStack.pop();
    sumLeft += current.val;
    if(current.left) leftStack.push(current.left);
    }
    
    let sumRight = 0;
    let rightStack = [root];
    while(rightStack.length !== 0){
    let current = rightStack.pop();
    sumRight += current.val;
    if(current.right) rightStack.push(current.right);
    }
    
    return Math.max(sumRight, sumLeft);
      
};


const maxPathSum = (root) => {

    // recursively:
    // n = number of nodes
    // Time: O(n)
    // Space: O(n)

    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    return root.val + Math.max(maxPathSum(root.left),maxPathSum(root.right));
};
    