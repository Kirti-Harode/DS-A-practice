// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

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

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f']
// // ]
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");

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

// treeLevels(a); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f'],
// //   ['g', 'h', 'i']
// // ]
// test_02:
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");
// const v = new Node("v");

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

// treeLevels(q); //->
// // [
// //   ['q'],
// //   ['r', 's'],
// //   ['t'],
// //   ['u'],
// //   ['v']
// // ]
// test_03:
// treeLevels(null); // -> []

const treeLevels = (root) => {
    //   create a stack to track the nodes
    //   create an result arr
    //   while queue is not empty 
    //   take current and add it  an inner array
    //   add current left and right to the queue
    //   add inner arr to result array
    //   return the result
      
      if(root === null) return [];
      let stack = [{node: root, levelNum: 0}];
      let levels = []
      while(stack.length > 0){
        let {node, levelNum} = stack.pop();
        
        if(levels.length === levelNum){
          levels.push([node.val]);
        }else{
          levels[levelNum].push(node.val);
        }
        if(node.right !== null) stack.push({node: node.right, levelNum: levelNum+1});
        if(node.left !== null) stack.push({node: node.left, levelNum: levelNum+1});
      }
      
      return levels;
};
    
   

// BF
const treeLevels = (root) => {

    if(root === null) return [];
    let queue = [{node: root, levelNum: 0}];
    let levels = []
    while(queue.length > 0){
      let {node, levelNum} = queue.shift();
      
      if(levels.length === levelNum){
        levels.push([node.val]);
      }else{
        levels[levelNum].push(node.val);
      }
      if(node.left !== null) queue.push({node: node.left, levelNum: levelNum+1});
      if(node.right !== null) queue.push({node: node.right, levelNum: levelNum+1});
    }
    
    return levels;
};


// recursion:
const treeLevels = (root) => {
    let levels = [];
    fillLevels(root, levels, 0);
    return levels;
  };
  
  const fillLevels = (root, levels, levelNum) => {
    if(root === null) return;
    
    if(levels.length === levelNum){
      levels.push([root.val]);
    }else{
      levels[levelNum].push(root.val);
    }
    
    fillLevels(root.left, levels, levelNum+1);
    fillLevels(root.right, levels, levelNum+1);
    
}