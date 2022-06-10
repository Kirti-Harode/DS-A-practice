// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Column -1: Only node 9 is in this column.
// Column 0: Nodes 3 and 15 are in this column in that order from top to bottom.
// Column 1: Only node 20 is in this column.
// Column 2: Only node 7 is in this column.
// Example 2:


// Input: root = [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation:
// Column -2: Only node 4 is in this column.
// Column -1: Only node 2 is in this column.
// Column 0: Nodes 1, 5, and 6 are in this column.
//           1 is at the top, so it comes first.
//           5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6.
// Column 1: Only node 3 is in this column.
// Column 2: Only node 7 is in this column.
// Example 3:


// Input: root = [1,2,3,4,6,5,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation:
// This case is the exact same as example 2, but with nodes 5 and 6 swapped.
// Note that the solution remains the same since 5 and 6 are in the same location and should be ordered by their values.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// 0 <= Node.val <= 1000


var verticalTraversal = function(root) {
    if(root === null) return []
    let min = Infinity;
    let max = -Infinity;
    let allNodes = {};
    
    let queue = [[root, 0, 0]];   //0,0,0
    while(queue.length){
        let popped = queue.shift();
        const [node, r, c] = popped;
        
        if(allNodes[c] === undefined) {
            allNodes[c] = { };
            allNodes[c][r] = [node.val]         //0:{0: [0]}
        }else{
            if(allNodes[c][r] !== undefined){
                allNodes[c][r].push(node.val)
            }else{
                allNodes[c][r] = [node.val]
            }
        }
        min = Math.min(c, min);
        max = Math.max(c, max);

        if(node.left){
           queue.push([node.left, r+1, c - 1]); 
        } 
        if(node.right) {
            queue.push([node.right, r+1, c + 1]);
        }
    }

    let result = [];
    
    for(let i = min; i <= max; i++){
        if(i in allNodes){
            let vals = Object.values(allNodes[i]);
            let subArr = []
            if(vals.length > 1){
                for(let sub of vals){
                    if(sub.length > 1){
                        sub = sub.sort((a,b) => a-b)
                    }
                    for(let ele of sub){
                        subArr.push(ele);
                    }
                }
                result.push(subArr);
            }else{
                for(let sub of vals){
                    result.push(sub)
                }
            }

        }
    }
    return result;
};





// better 

min = Infinity;
max = -Infinity;
var verticalTraversal = function(root) {
    let allNodes = {};
    _verticalTraversal(root, 0, 0, allNodes);
    // console.log(allNodes)
    let result = [];
    
    for(let i = min; i <= max; i++){
        if(allNodes[i]){
            let vals = Object.values(allNodes[i]);
            let subArr = [];
            for(let sub of vals){
                if(sub.length > 1){
                    sub.sort((a,b) => a-b);
                }
                for(let ele of sub){
                    subArr.push(ele);
                }
            }
            result.push(subArr);   
        }
    }
    return result;
};

 function _verticalTraversal(root, row, col, allNodes){  //O(n)
     if(root === null) return null;
     min = Math.min(col, min);
     max = Math.max(col, max);
     if(allNodes[col] === undefined){
         allNodes[col] = {};
     }
     if(allNodes[col][row] === undefined){
         allNodes[col][row] = [];
     }
     allNodes[col][row].push(root.val);
     
      _verticalTraversal(root.left, row+1, col-1, allNodes);
      _verticalTraversal(root.right, row+1, col+1, allNodes);
 }