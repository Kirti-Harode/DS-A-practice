// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100


var binaryTreePaths = function(root) {
    let res = [];
    let path = "";
    return findPath(root, path, res);
    // return res;
};

function findPath(root, path, res){
    if(root === null) return res;
  
    
    path += (path.length === 0 ? "" : "->") + root.val;
    
    if(root.left === null && root.right === null){
      res.push(path);  
    }else{
        findPath(root.left, path, res);
        findPath(root.right, path, res);
    }
    return res;
}