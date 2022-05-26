// Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes, p and q. If either node p or q does not exist in the tree, return null. All values of the nodes in the tree are unique.

// According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)". A descendant of a node x is a node y that is on the path from node x to some leaf node.

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:



// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5. A node can be a descendant of itself according to the definition of LCA.
// Example 3:



// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
// Output: null
// Explanation: Node 10 does not exist in the tree, so return null.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q


var lowestCommonAncestor = function(root, p, q) {
    let path1 = findPath(root, p)
    let path2 = findPath(root, q)
    
    if(path1 === null || path2 === null) return null;
     
     let set = new Set(path1);
     for(let ele of path2){
         if(set.has(ele)) return ele;
     }
 };
 
 function findPath(root, target){
     if(root === null) return null;
     if(root === target) return [root];
     
     let left = findPath(root.left, target);
     if(left !== null){
         left.push(root);
         return left;
     }
     
     let right = findPath(root.right, target);
     if(right !== null){
         right.push(root);
         return right;
     }
     
     return null;
 }



//  taking a lot of time

 var lowestCommonAncestor = function(root, p, q) {
    let pIncludes = treeIncludes(root, p);
    let qIncludes = treeIncludes(root, q);
    
    if(pIncludes === true && qIncludes === true){
        let l = lca(root, p, q)
    
        if(l === null) {
            return root;
        }else{
             return l;
        }
        // return lca(root, p, q)
       
    }
    return null;
};

function lca(root, p, q){
    if(root === null) return null;
    if(root === p || root === q) return root;
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    if(left && right) return root;
    // if(!left && !right) return null;
    
    if(!left) return right;
    if(!right) return left;
}


function treeIncludes(root, target){
    if(root === null) return false;
    if(root === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
