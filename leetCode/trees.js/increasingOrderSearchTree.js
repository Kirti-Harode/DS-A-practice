// Given the root of a binary search tree, rearrange the tree in in-order so that the 
// leftmost node in the tree is now the root of the tree, and every node has no left child 
// and only one right child.


// Example 1:
//                 5                            1
//                /  \                           \
//               3    6                           2
//              / \    \                           \
//             2   4    8                           3
//            /        /  \                          \
//           1        7    9                           4
//                                                      ...
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

// In-Order Traversal:
var increasingBST = function(root) {
    let vals = []
    allNodes(root, vals);
   
    let newNode = new TreeNode(0);
    let current = newNode;
    for(let val of vals){
        current.right = new TreeNode(val);
        current = current.right;
    }
    return newNode.right;
};

const allNodes = function(root, vals){
    if(root === null) return null;
  
    allNodes(root.left, vals);
    vals.push(root.val);
} 

// Complexity Analysis

// Time Complexity: O(N)O(N), where NN is the number of nodes in the given tree.

// Space Complexity: O(N)O(N).



// Traversal with Relinking: 

let cur;
var increasingBST = function(root) {
    
    let newNode = new TreeNode(0);
     cur = newNode;
    allNodes(root);
    return newNode.right;
};

const allNodes = function(root){
    if(root === null) return null;
  
    allNodes(root.left);
    root.left = null;
    cur.right = root;
    cur = root;
    allNodes(root.right, cur);
}


// Complexity Analysis

// Time Complexity: O(N)O(N), where NN is the number of nodes in the given tree.

// Space Complexity: O(H)O(H) in additional space complexity, where HH is the height of the given tree, 
// and the size of the implicit call stack in our in-order traversal.