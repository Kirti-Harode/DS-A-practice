// Given the root of a binary tree, return the level order traversal of its nodes' 
// values. (i.e., from left to right, level by level).

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
    

    // use DFS? can be done with recursion
    // use stack to store level #
    // create levels array to store final result
    // create a loop that runs until the stack is empty
    // check if levels === level #
    
    let stack = [{node: root, levelNum: 0}];
    let levels = [];
    while(stack.length > 0){
        let {node, levelNum} = stack.pop();
        if(node !== null){
            if(levels.length === levelNum){
                levels.push([node.val]);
            }else{
                levels[levelNum].push(node.val);
            }
            if(node.right !== null) stack.push({node: node.right, levelNum: levelNum+1});
            if(node.left !== null) stack.push({node: node.left, levelNum: levelNum+1});
        }
    }
    return levels;
}
var levelOrder = function(root) { 
    // can also use BFS
    // we can use a queue with BFS
    // initialize queue = [root]
    // if (!root) return [];
    // shift a "current" value out of queue
    // push current's children into the queue
    // how do we keep track of the levels? 
    
    // doesn't work rn:
    let levels = [];
    if(root === null) return levels;
    let queue = [root];
    let level = 0;
    
    while(queue.length > 0){
        levels.push([]);
        for(let i = 0; i < queue.length; i++){
            let node = queue.shift();
            levels[level].push(node.val);
            
            if(node.left != null) queue.push(node.left);
            if(node.right != null) queue.push(node.right);
               
        }
        level ++;
    }
    return levels;
};


