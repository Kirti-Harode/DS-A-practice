// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

 

// Example 1:


// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4
// Example 2:

// Input: root = [1], target = 4.428571
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 0 <= Node.val <= 109
// -109 <= target <= 109


var closestValue = function(root, target) {
    let closest = root.val;
      
    while(root !== null){
        if(Math.abs(root.val - target) <= Math.abs(closest - target)) closest = root.val;
        
        if(root.val === target) break;
        
        root = target > root.val ? root.right : root.left;
    }
    
    return closest;
};

// Complexity Analysis

// Time complexity : O(H) since here one goes from root down to a leaf.

// Space complexity : O(1).