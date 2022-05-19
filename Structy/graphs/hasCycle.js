// has cycle
// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

// test_00:
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
// }); // -> true
// test_01:
// hasCycle({
//   a: ["b", "c"],
//   b: ["c"],
//   c: ["d"],
//   d: [],
// }); // -> false
// test_02:
// hasCycle({
//   a: ["b", "c"],
//   b: [],
//   c: [],
//   e: ["f"],
//   f: ["e"],
// }); // -> true
// test_03:
// hasCycle({
//   q: ["r", "s"],
//   r: ["t", "u"],
//   s: [],
//   t: [],
//   u: [],
//   v: ["w"],
//   w: [],
//   x: ["w"],
// }); // -> false
// test_04:
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["a"],
//   g: [],
// }); // -> true
// test_05:
// hasCycle({
//   a: ["b"],
//   b: ["c"],
//   c: ["d"],
//   d: ["b"],
// }); // -> true

// white-grey-black algorithm to detect cycle;
// white: unexplored
// grey: visiting
// black: visited

const hasCycle = (graph) => {
    let visited = new Set();
    let visiting = new Set();
    for(let node in graph){
     if(traverse(graph, node, visited, visiting)) return true;
    }
    return false;
};
  
  
function traverse(graph, node, visited, visiting){
    if(visited.has(node)) return false;
    if(visiting.has(node)) return true;
  //   add that node in visiting and loop over its neighbors
    visiting.add(node)
  
    for(let neighbor of graph[node]){
      if(traverse(graph, neighbor, visited, visiting)) return true;
    }
  //   remove set from viisting bcos its done visiting that node and one node should only be in just one set not both
    visiting.delete(node)
    visited.add(node)
    return false;
}

//  n = number of nodes, n^2 / e = number of edges
// Time: O(n^2) or O(e)
// Space: O(n)