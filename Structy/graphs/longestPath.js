// longest path
// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

// test_00:
// const graph = {
//   a: ['c', 'b'],
//   b: ['c'],
//   c: []
// };

// longestPath(graph); // -> 2
// test_01:
// const graph = {
//   a: ['c', 'b'],
//   b: ['c'],
//   c: [],
//   q: ['r'],
//   r: ['s', 'u', 't'],
//   s: ['t'],
//   t: ['u'],
//   u: []
// };

// longestPath(graph); // -> 4
// test_02:
// const graph = {
//   h: ['i', 'j', 'k'],
//   g: ['h'],
//   i: [],
//   j: [],
//   k: [],
//   x: ['y'],
//   y: []
// };

// longestPath(graph); // -> 2
// test_03:
// const graph = {
//   a: ['b'],
//   b: ['c'],
//   c: [],
//   e: ['f'],
//   f: ['g'],
//   g: ['h'],
//   h: []
// };

// longestPath(graph); // -> 3



const longestPath = (graph) => {
//   directed acyclic graph: only one direction and no cycle
//   DFS
//   find a final node which does not have any arrow going from
//   make them as base cases and at base 0
//   use visited to keep track of visited node
      
    const distance = {};
    for(let node in graph){
        if(graph[node].length === 0){
            distance[node] = 0;
        }
    }
    
    for(let node in graph){
        traverseDistance(graph, node, distance);
    }
    return Math.max(...Object.values(distance));
};
    
const traverseDistance = (graph, node, distance) => {
    if(node in distance) return distance[node];
      
    let maxLength = 0;
    for(let neighbor of graph[node]) {
        const len = traverseDistance(graph, neighbor, distance);
        if(len > maxLength) maxLength = len;
    }
      
    distance[node] = 1 + maxLength;
    return distance[node];
}
    
    
    
    // e = # edges
    // n = # nodes
    // Time: O(e)
    // Space: O(n)