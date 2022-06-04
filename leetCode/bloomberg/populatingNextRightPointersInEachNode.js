// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000
 

// Follow-up:

// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.


var connect = function(root) {
    if(root === null) return null;
    
    let queue = [[root, 0]];
    while(queue.length){
        let [node, levelNum] = queue.shift();
        
        if(queue.length && queue[0][1] === levelNum){
            node.next = queue[0][0];
        }else{
            node.next = null;
        }
        
        if(node.left) queue.push([node.left, levelNum+1]);
        if(node.right) queue.push([node.right, levelNum+1]);
    }
    return root;
};


//     in constant space:
if(root === null) return root;
// Start with the root node. There are no next pointers
// that need to be set up on the first level
let leftMost = root;
// Once we reach the final level, we are done

while(leftMost.left !== null){
let head = leftMost;
while(head !== null){
    
    // Iterate the "linked list" starting from the head
    // node and using the next pointers, establish the 
    // corresponding links for the next level
    head.left.next = head.right;
    
    if(head.next !== null){
        head.right.next = head.next.left;
    }
     // Progress along the list (nodes on the current level)
    head = head.next;
}
 // Move onto the next level
leftMost = leftMost.left;
}
return root;