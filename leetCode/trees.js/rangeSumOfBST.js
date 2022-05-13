// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value in the inclusive range [low, high].


// Example 1:

//                      10
//                     /  \
//                    5   15
//                   / \    \
//                  3   7    18

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:
//                      10
//                     /  \
//                    5    15
//                  /  \   /  \
//                 3   7  13  18
//                /   /
//               1   6

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

// brute force:  n = no of nodes
// time O(n) : went through all the nodes and the checked the range
// space: O(n) : stored in the stack every node
// iterative:
var rangeSumBST = function(root, low, high) {    
    if(root === null) return null;
    let sum = 0;
    let stack = [root];
    while(stack.length > 0){
        let current = stack.pop();
        if(current.val >= low && current.val <= high){
            sum += current.val;
        }
        
        if(current.left !== null) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);
    }
    return sum;
};
// recursion:
var rangeSumBST = function(root, low, high) {    
    let sum = 0;
    if(root === null) return null;
    if(root.val >= low && root.val <= high) sum += root.val;

    sum +=  rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    return sum;
};




// using BST properties: n = no of nodes
// time : O(n) 
// space: O(n)
// recursive:
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    if(root === null) return null;
    if(root.val >= low && root.val <= high) sum += root.val;
    
    if(root.val > low){
        sum += rangeSumBST(root.left, low, high);
    }
    if(root.val < high){
        sum += rangeSumBST(root.right, low, high);
    }
   return sum;
}

// iterative:
var rangeSumBST = function(root, low, high) {

    if(root === null) return null;
    let sum = 0;
    let stack = [root];
    while(stack.length > 0){
        let current = stack.pop();
        if(current.val >= low && current.val <= high){
            sum += current.val;
        }
        
        if(current.val > low ){
            if(current.left !== null) stack.push(current.left);
        }
        
        if(current.val < high ){
            if(current.right !== null) stack.push(current.right);
            
        }
        
    }
    return sum;
};
