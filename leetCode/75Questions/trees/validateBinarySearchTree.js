// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


var isValidBST = function(root) {
    
    let result = isBST(root);
    return result.isValid;
};

function isBST(root){
    let result = {min: Infinity, max: -Infinity, isValid: false};
    
    if(root === null) return {min: Infinity, max: -Infinity, isValid: true};
    
    let left = isBST(root.left);
    let right = isBST(root.right);
    
    result.min = Math.min(root.val, left.min, right.min);
    result.max = Math.max(root.val, left.max, right.max);
    
    if(!left.isValid || !right.isValid){
        result.isValid = false;
    }else if(root.val > left.max && root.val < right.min){
            result.isValid = true;
    }
    
    return result;
    
}