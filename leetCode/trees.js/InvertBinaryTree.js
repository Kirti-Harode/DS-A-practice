// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Complexities: 
// n is the number of nodes in the tree
// time: O(n)
// space: O(n)
var invertTree = function(root) {
    if(root === null) return null;

    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
};


var invertTree = function(root) {
    if(root === null) return null;

    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};


// Complexities: 
// n is the number of nodes in the tree
// time: O(n)   with shift O(n^2)
// space: O(1)
var invertTree = function(root) {
    if(root === null) return null;
    let queue = [root];
    while(queue.length > 0){
        let node = queue.shift();
        let temp = node.right;
        node.right = node.left;
        node.left = temp;
        
        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
        
    }
    return root;
};
