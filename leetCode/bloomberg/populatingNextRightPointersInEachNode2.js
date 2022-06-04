// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 6000].
// -100 <= Node.val <= 100
 

// Follow-up:

// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.


var connect = function(root) {
    
    //     queue to track nodes from the tree
    //     add root as a node and 0 as levelNum in the queue
    //     while queue is no empty
    //     remove from front, node
    //     check if node's left is not null, first ele in queue ion same level if it is then set the node's next to that node from queue
    //     if there is no node at the same level then point it to null
    //     add node's left and right with levelNum increased by 1
    //      at the return root
        
    if(root === null) return null;
    let queue = [[root, 0]];   // 1 0, 2 1, 3 1, 4 2, 5 2
    
    while(queue.length > 0){
        let currentNode = queue.shift();     // 1, 0, 2 1
        if(queue.length > 0 && queue[0][1] === currentNode[1]){       // 
            currentNode[0].next = queue[0][0];           // 2.next = 3
        }else{
            currentNode[0].next = null;                      // 1.next = null
        }
        
        // console.log(queue)
        
        if(currentNode[0].left !== null) queue.push([currentNode[0].left,  currentNode[1] + 1]);
        if(currentNode[0].right !== null) queue.push([currentNode[0].right,  currentNode[1] + 1]);
        
        // console.log(queue)
        
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