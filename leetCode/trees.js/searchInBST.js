// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted 
// with that node. If such a node does not exist, return null.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107

var searchBST = function(root, val) {
    if(root === null || root.val === val) return root;
    
    if(root.val > val){
        return searchBST(root.left, val);
    }else{
        return searchBST(root.right, val);
    }
    
    
};

// Complexity Analysis

// Time complexity : O(H), where H is a tree height. That results in O(log N) in the average case, and O(N) in the worst case.

// Space complexity : \mathcal O(H) to keep the recursion stack, i.e. O(logN) in the average case, and O(N) in the worst case.


// Iterative:
var searchBST = function(root, val) {

    if(root === null || root.val === val) return root;
    
    let stack = [root];
    while(stack.length > 0){
        let node = stack.pop();
        if(node.val === val) return node;
        if(node.val > val && node.left !== null){
            stack.push(node.left);
        }else if(node.val < val && node.right !== null){
            stack.push(node.right);
        }
    }
    return null;
};

// Time complexity : \mathcal{O}(H)O(H), where HH is a tree height. That results in \mathcal{O}(\log N)O(logN) in the average case, and \mathcal{O}(N)O(N) in the worst case.
// Space complexity : \mathcal{O}(1)O(1) since it's a constant space solution.