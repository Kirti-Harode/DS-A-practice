// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

 

// Example 1:


// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
// Example 2:


// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
// Example 3:


// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).
 

// Constraints:

// The number of nodes in the tree is in the range [1, 3000].
// -100 <= Node.val <= 100


var widthOfBinaryTree = function(root) {
    //     if(root === null) return 0;
    //     let maxWidth = 0;
    //     let queue = [[root, 0]];
        
    //     while(queue.length){
    //         let size = queue.length;
    //         let currentLevel = [];
            
    //         for(let i = 0; i < size; i++){
    //             let [node, position]= queue.shift();
    //             currentLevel.push([node, position]);
                
    //             if(node.left){
    //                 queue.push([node.left, (2 * position)]);  
    //             }
    //             if(node.right){
    //                 queue.push([node.right, ((2 * position) + 1)])
    //             }
    //         }
    //         let currentLevelWidth = currentLevel.length === 1 ? 1 : (currentLevel[currentLevel.length-1][1] - currentLevel[0][1] + 1);
    //         maxWidth = Math.max(maxWidth, currentLevelWidth);
    //     }
    //     return maxWidth;
          if (!root) return 0;
        
        let ans = 0;
        let queue = [[root, 0]];
        
        while (queue.length) {        
            ans = Math.max(ans, queue[queue.length-1][1] - queue[0][1] + 1);
            let offset = queue[0][1];
            
            let nextQ = [];
            
            for (let q of queue) {
                if (q[0].left) {
                    nextQ.push([q[0].left, q[1]*2-offset]);
                }
                if (q[0].right) {
                    nextQ.push([q[0].right, q[1]*2+1-offset]);
                }
            }
            
            queue = nextQ;
        }
        
        return ans;
    };