// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Example 2:


// Input: root = [3,9,8,4,0,1,7]
// Output: [[4],[9],[3,0,1],[8],[7]]
// Example 3:

// Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
// Output: [[4],[9,5],[3,0,1],[8,2],[7]]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// create global var min and max to keep track of min col numa nd max col num
// create an allNodes hash to keep col num as key and as a value an arr of nodes on that col
// traverse the tree dfs/bfs
// for left decrement the col num by 1 and for right increment the col num by 1
// and add col as key in the hash and add node val as value in an arr

// create a results arr
// start loop i from min upto max(including)
// for each i from the all nodes hash find the nodes and add them into the results arr
// return results arr

min = Infinity;
max = -Infinity;
var verticalOrder = function(root) {
    if(root === null) return [];
    
    let allNodes = {}
    _verticalOrder(root, 0, allNodes);

    let result = [];
    for(let i = min; i <= max; i++){
        if(i in allNodes){
            result.push(allNodes[i]);  
        }
    }
    return result;
    
};

var _verticalOrder = function(root,  allNodes) {
 
    let queue = [[root, 0]];
    while(queue.length){
        let [node, col] = queue.shift();
        
         if(allNodes[col] === undefined){
            allNodes[col] = [];
         }
        allNodes[col].push(node.val);
    
        min = Math.min(min, col);
        max = Math.max(max, col);
       if(node.left) queue.push([node.left, col-1]);
       if(node.right) queue.push([node.right, col+1]);
    }

}