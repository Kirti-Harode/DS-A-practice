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


// Shortest Cell Path
// In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

// Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

// It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

// If the task is impossible, return -1.

// Examples:

// input:
// grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: 8
// (The lines below represent this grid:)
// 1111
// 0001
// 1111

// grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: -1
// (The lines below represent this grid:)
// 1111
// 0001
// 1011
// Constraints:

// [time limit] 5000ms
// [input] array.array.integer grid
// 1 ≤ arr.length = arr[i].length ≤ 10
// [input] integer sr
// [input] integer sc
// [input] integer tr
// [input] integer tc
// All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
// [output] integer