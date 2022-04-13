// tree path finder
// Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

// You may assume that the tree contains unique values.

// test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// pathFinder(a, 'p'); // -> null
// test_02:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// pathFinder(a, "c"); // -> ['a', 'c']
// test_03:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// pathFinder(a, "h"); // -> ['a', 'c', 'f', 'h']
// test_04:
// const x = new Node("x");

// //      x

// pathFinder(x, "x"); // -> ['x']
// test_05:
// pathFinder(null, "x"); // -> null
// test_06:
// const root = new Node(0);
// let curr = root;
// for (let i = 1; i <= 6000; i += 1) {
//   curr.right = new Node(i);
//   curr = curr.right;
// }

// //      0
// //       \
// //        1
// //         \
// //          2
// //           \
// //            3
// //             .
// //              .
// //               .
// //              5999
// //                \
// //                6000

// pathFinder(root, 3451); // -> [0, 1, 2, 3, ..., 3450, 3451]


const pathFinder = (root, target) => {
    // time: O(n^2), space: O(n)
    //   root matches target return root in a array
    //   root is null return null
    //   if root.right is match or left is match then connect root and return 
      if(root === null) return null;
      if(root.val === target) return [root.val];
      
      let leftPath = pathFinder(root.left, target);
      let rightPath = pathFinder(root.right, target);
      if(leftPath !== null){
        return [root.val, ...leftPath]; //this also o(n)
      }else if(rightPath !== null){
        return [root.val, ...rightPath];
      }
      return null;
};



// OR: 

const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
      return null;
    } else {
      return result.reverse();
    }
  };
  const pathFinderHelper = (root, target) => {
  // time: O(n), space: O(n)
  //   root matches target return root in a array
  //   root is null return null
  //   if root.right is match or left is match then connect root and return 
   if (root === null) return null;
    if (root.val === target) return [ root.val ];
    
    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
      return leftPath;
    }
    
    const rightPath = pathFinderHelper(root.right, target);
    if (rightPath !== null) {
      rightPath.push(root.val);
      return rightPath;
    }
    return null;
  };
   