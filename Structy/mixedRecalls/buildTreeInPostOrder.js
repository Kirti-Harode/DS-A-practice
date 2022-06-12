// build tree in post
// Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and postorder are unique.

// test_00
// buildTreeInPost(
//   [ 'y', 'x', 'z' ],
//   [ 'y', 'z', 'x' ] 
// );
// //       x
// //    /    \
// //   y      z
// test_01
// buildTreeInPost(
//   [ 'd', 'b', 'e', 'a', 'f', 'c', 'g' ],
//   [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
// );
// //      a
// //    /    \
// //   b      c
// //  / \    / \
// // d   e  f   g
// test_02
// buildTreeInPost(
//   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//   [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
// );
// //      a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h
// test_03
// buildTreeInPost(
//   ['m', 'n'],
//   ['m', 'n']
// );
// //       n
// //     /
// //    m
// test_04
// buildTreeInPost(
//   ['n', 'm'],
//   ['m', 'n']
// );
// //     n
// //      \
// //       m


const buildTreeInPost = (inOrder, postOrder) => {
    if(inOrder.length === 0) return null;
    
    let currentRoot = postOrder[postOrder.length-1];
    let root = new Node(currentRoot);
    let mid = inOrder.indexOf(currentRoot);
    let leftInOrder = inOrder.slice(0, mid);
    let rightInOrder = inOrder.slice(mid+1);
    
    let leftPostOrder = postOrder.slice(0, leftInOrder.length);
    let rightPostOrder = postOrder.slice(leftInOrder.length, -1);
    
    root.left = buildTreeInPost(leftInOrder, leftPostOrder);
    root.right = buildTreeInPost(rightInOrder, rightPostOrder);
    
    
    return root;
};