// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

// test_00:
// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ];

// shortestPath(edges, 'w', 'z'); // -> 2
// test_01:
// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ];

// shortestPath(edges, 'y', 'x'); // -> 1
// test_02:
// const edges = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ];

// shortestPath(edges, 'a', 'e'); // -> 3
// test_03:
// const edges = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ];

// shortestPath(edges, 'e', 'c'); // -> 2
// test_04:
// const edges = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ];

// shortestPath(edges, 'b', 'g'); // -> -1
// test_05:
// const edges = [
//   ['c', 'n'],
//   ['c', 'e'],
//   ['c', 's'],
//   ['c', 'w'],
//   ['w', 'e'],
// ];

// shortestPath(edges, 'w', 'e'); // -> 1
// test_06:
// const edges = [
//   ['c', 'n'],
//   ['c', 'e'],
//   ['c', 's'],
//   ['c', 'w'],
//   ['w', 'e'],
// ];

// shortestPath(edges, 'n', 'e'); // -> 2
// test_07:
// const edges = [
//   ['m', 'n'],
//   ['n', 'o'],
//   ['o', 'p'],
//   ['p', 'q'],
//   ['t', 'o'],
//   ['r', 'q'],
//   ['r', 's']
// ];

// shortestPath(edges, 'm', 's'); // -> 6

const shortestPath = (edges, nodeA, nodeB) => {
    //   breadth first will be more useful here
    //   convert edges in a graph
    //   make a queue to track all nodes and level of the nodes, nodeA will be at level 0
    //   create a visited set to keep track of visited nodes, to avoid going in loop and count one node twice
    //   while queue is not empty
    //   pop a node check if that is in visited
    //   check if this node is nodeB or not, if true then return the level corresponding to that node from the queue
    //   add all neighbors of current node with one level up in queue.
    let visited = new Set([nodeA]);
    let graph = convertToGraph(edges);
    console.log(graph)
    let queue = [{node: nodeA, level: 0}];
    while(queue.length > 0){
      let current = queue.shift();
      
      if(current.node === nodeB){
        return current.level;
      }
      for(let neighbor of graph[current.node]){
        if(!visited.has(neighbor)){
          visited.add(neighbor);
          queue.push({node: neighbor, level: current.level + 1}); 
        }
      }
    }
    return -1;
}
function convertToGraph(edges){
    let graph = {};
    for(let edge of edges){
      const [a, b] = edge;
      if (!graph[a]) graph[a] = [];
      graph[a].push(b)
    
      if (!graph[b]) graph[b] = [];
      graph[b].push(a)
          
    }
    return graph;
};
    
    
    
const edges = [
      ['w', 'x'],
      ['x', 'y'],
      ['z', 'y'],
      ['z', 'v'],
      ['w', 'v']
    ];
    
shortestPath(edges, 'w', 'z'); // -> 2
    