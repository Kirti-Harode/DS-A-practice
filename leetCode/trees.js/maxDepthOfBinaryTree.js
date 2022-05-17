// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100


var maxDepth = function(root) {
    if(root === null) return 0;
    // if(root.left === null && root.right === null) return 1;  //works without this also
    return  Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Complexity analysis

// Time complexity : we visit each node exactly once, thus the time complexity is O(N), where NN is the number of nodes.

// Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node has only left child node, 
// the recursion call would occur N times (the height of the tree), therefore the storage to keep the call stack would be O(N). 
// But in the best case (the tree is completely balanced), the height of the tree would be log(N). 
// Therefore, the space complexity in this case would be O(log(N)).