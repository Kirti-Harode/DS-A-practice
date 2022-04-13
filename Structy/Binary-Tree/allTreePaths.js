// all tree paths
// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

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

// allTreePaths(a); // ->
// // [ 
// //   [ 'a', 'b', 'd' ], 
// //   [ 'a', 'b', 'e' ], 
// //   [ 'a', 'c', 'f' ] 
// // ] 
// test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');
// const i = new Node('i');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //         a
// //      /    \
// //     b      c
// //   /  \      \
// //  d    e      f
// //      / \    /   
// //     g  h   i 

// allTreePaths(a); // ->
// // [ 
// //   [ 'a', 'b', 'd' ], 
// //   [ 'a', 'b', 'e', 'g' ], 
// //   [ 'a', 'b', 'e', 'h' ], 
// //   [ 'a', 'c', 'f', 'i' ] 
// // ] 
// test_02:
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');
// const u = new Node('u');
// const v = new Node('v');

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //      q
// //    /   \ 
// //   r     s
// //    \
// //     t
// //    /
// //   u
// //  /
// // v

// allTreePaths(q); // ->
// // [ 
// //   [ 'q', 'r', 't', 'u', 'v' ], 
// //   [ 'q', 's' ] 
// // ] 
// test_03:
// const z = new Node('z');

// //      z

// allTreePaths(z); // -> 
// // [
// //   ['z']
// // ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// n = number of nodes
// Time: ~O(n)  O(n^2)
// Space: ~O(n)
const allTreePaths = (root) => {
    //   if root is null return empty 1 d arr
    //   concat arrays if root if leaf node return 2d arr with root val in it
    //   add root val to every sub arr 
      let allPaths = [];
      if(root === null) return [];
      if(root.left === null && root.right === null) return [[root.val]];
      
      let leftArr = allTreePaths(root.left);
      let rightArr = allTreePaths(root.right);
      
      for(let subArr of leftArr){
        allPaths.push([root.val, ...subArr]);
      }
      
      for(let subArr of rightArr){
        allPaths.push([root.val, ...subArr]);
      }
      
      return allPaths;
};