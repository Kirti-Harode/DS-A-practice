// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000


var levelOrder = function(root) {
    if(root === null) return [];
    
    let levels = [];
    let queue = [[root, 0]];
    while(queue.length){
        let [node, level] = queue.shift();
        
        if(levels.length === level){
            levels.push([node.val]);
        }else{
            levels[level].push(node.val);
        }

        if(node.left) queue.push([node.left, level+1]);
        if(node.right) queue.push([node.right, level+1]);
        
    }
    return levels;
};