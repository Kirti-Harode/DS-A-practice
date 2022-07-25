// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

// Example 1:


// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:


// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false
 

// Constraints:

// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104


var isSubtree = function(root, subRoot) {
    //     if(root === null && subRoot === null) return true;
    //     if(root === null || subRoot === null) return false;
        
    //     return (root.val === subRoot.val && isSubtree(root.left, subRoot.left) && isSubTree(root.right, subRoot.right));
        
        // given two nodes are they the same?
        const isSame = (n1, n2) => {
            if (!n1 && !n2) return true;
            if (!n1 || !n2 || n1.val !== n2.val) return false;
            return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
        };
    
        // check if subRoot is subtree of root:
        const DFS = (node) => {
            if (!node) return false;
            if (isSame(node, subRoot)) return true;
            return DFS(node.left) || DFS(node.right);
        };
    
        return DFS(root);
    
    };