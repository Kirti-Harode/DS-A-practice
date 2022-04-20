// connected components count
// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

// test_00:
// connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }); // -> 2
// test_01:
// connectedComponentsCount({
//   1: [2],
//   2: [1,8],
//   6: [7],
//   9: [8],
//   7: [6, 8],
//   8: [9, 7, 2]
// }); // -> 1
// test_02:
// connectedComponentsCount({
//   3: [],
//   4: [6],
//   6: [4, 5, 7, 8],
//   8: [6],
//   7: [6],
//   5: [6],
//   1: [2],
//   2: [1]
// }); // -> 3
// test_03:
// connectedComponentsCount({}); // -> 0
// test_04:
// connectedComponentsCount({
//   0: [4,7],
//   1: [],
//   2: [],
//   3: [6],
//   4: [0],
//   6: [3],
//   7: [0],
//   8: []
// }); // -> 5



const connectedComponentsCount = (graph) => {
    //   create a count var to keep no of connected components
    //   take all the keys from the adjacency and loop over them
    //   create a set to keep track of visited nodes to avoid infinite loop
    //   create a stack to keep track of nodes
    //   while stack is not empty take current and iterate over its neighbors and push them to stack
    //   return count at the end
      
    let count = 0;
    let nodes = Object.keys(graph);
    let visited = new Set();
    
    for(let node of nodes){
    let stack = [node];
    while(stack.length > 0){
        let current = stack.pop();
        if(visited.has(String(current))){
        break;
        }else{
        visited.add(String(current));
        }
        for(let neighbor of graph[current]){
        stack.push(neighbor);
        }
    }
    // if(stack.length === 0){
        count ++;
    // } 
    }
    return count;
};




const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;
    
    for(let node in graph){
      if(explore(graph, node, visited)){
        count ++;
      }
    }
    return count;
  };
  
  function explore(graph, current, visited){
    if(visited.has(String(current))) return false; //converting to String  bcos keys in hash are string so when we put that in set it still will be a sgtring so check every thing with string and add every node after coverting to string.
    
    visited.add(String(current));
    
    for(let neighbor of graph[current]){
      explore(graph, neighbor, visited);
    }
    return true;
  }
//   n = number of nodes
//   e = number edges
//   Time: O(e)
//   Space: O(n)  