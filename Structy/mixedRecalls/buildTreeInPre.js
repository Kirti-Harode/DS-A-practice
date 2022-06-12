// build tree in pre
// Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and preorder are unique.

// test_00
// buildTreeInPre(
//   [ 'z', 'y', 'x' ],
//   [ 'y', 'z', 'x' ] 
// );
// //       y
// //    /    \
// //   z      x
// test_01
// buildTreeInPre(
//   [ 'y', 'z', 'x' ],
//   [ 'y', 'x', 'z' ] 
// );
// //       y
// //        \
// //         x
// //        / 
// //       z
// test_02
// buildTreeInPre(
//   [ 'd', 'b', 'g', 'e', 'h', 'a', 'c', 'f' ],
//   [ 'a', 'b', 'd', 'e', 'g', 'h', 'c', 'f' ] 
// );
// //       a
// //    /    \
// //   b      c
// //  / \      \
// // d   e      f
// //    / \
// //    g  h
// test_03
// buildTreeInPre(
//   [ 't', 'u', 's', 'q', 'r', 'p' ],
//   [ 'u', 't', 's', 'r', 'q', 'p' ] 
// );
// //     u
// //  /    \
// // t      s
// //         \
// //         r
// //        / \
// //        q  p
// test_04
// buildTreeInPre(
//   [ 'm', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't' ],
//   [ 'l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't' ] 
// );
// //        l
// //     /     \
// //    m       n
// //         /    \
// //         o     p
// //        / \   / \
// //       q   r s   t


const buildTreeInPre = (inOrder, preOrder) => {
  
    if(inOrder.length === 0) return null;
    
    let rootVal = preOrder[0];
    let root = new Node(rootVal);
    
    let mid = inOrder.indexOf(rootVal);
    
    let leftInOrder = inOrder.slice(0, mid);
    let rightInOrder = inOrder.slice(mid+1);
    
    let leftPreOrder = preOrder.slice(1, leftInOrder.length+1);
    let rightPreOrder = preOrder.slice(leftInOrder.length+1);
    
    root.left = buildTreeInPre(leftInOrder, leftPreOrder);
    root.right = buildTreeInPre(rightInOrder, rightPreOrder);
    return root;
  };
  