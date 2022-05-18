// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// test_00:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'j', 'm'); // -> true
// test_01:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'm', 'j'); // -> true
// test_02:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'l', 'j'); // -> true
// test_03:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'k', 'o'); // -> false
// test_04:
// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// undirectedPath(edges, 'i', 'o'); // -> false
// test_05:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];


// undirectedPath(edges, 'a', 'b'); // -> true
// test_06:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'a', 'c'); // -> true
// test_07:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true
// test_08:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ];

// undirectedPath(edges, 'r', 'b'); // -> false
// test_09:
// const edges = [
//   ['s', 'r'],
//   ['t', 'q'],
//   ['q', 'r'],
// ];

// undirectedPath(edges, 'r', 't'); // -> true


// uses set to keep track of nodes eacuse it is a undirectional graph so 
// ther can be a cycle, to avoid getting in a Infinity loop, use a set
const undirectedPath = (edges, nodeA, nodeB) => {
    //   convert the  edges to an graph
    //   then use traversal to find the path
      let graph = buildGraph(edges);
      return hasPath(graph, nodeA, nodeB, new Set());   
    };
    
    const hasPath = (graph, src, dst, visited) => {
      if (src === dst) return true;
      if (visited.has(src)) return false;
      visited.add(src);
      
      for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true) {
          return true;    
        }
      }
      
      return false;
};
      
      
    //  iteratively: not working yet
    //   let stack = [nodeA]
    //     while(stack.length !== 0){
    //       let current = stack.pop();
    //       if(current === nodeB) return true;
    //       if(visited.has(current)) return false;
         
    //       visited.add(current);
    //       for(let neighbor of graph[current]){
    //         stack.push(neighbor);
    //       }
    //     }
    //     return false;
    // };
    
    
function buildGraph(edges){
    let graph = {};
    for(let i = 0; i < edges.length; i++){
        if(graph[edges[i][0]]){
        graph[edges[i][0]].push(edges[i][1])
        }else{
        graph[edges[i][0]] = [edges[i][1]]
        }
        if(graph[edges[i][1]]){
            graph[edges[i][1]].push(edges[i][0])
        }else{
        graph[edges[i][1]] = [edges[i][0]]
        }
    }
    return graph;
    //   or: 
    //   for(let edge of edges){
    //     const [a, b] = edge;
    //     if(!a in graph) graph[a] = [];
    //     if(!b in graph) graph[b] = [];
    //     graph[a].push(b);
    //     graph[b].push(a);
        
    //   }
}


    
// const edges = [
    //   ['i', 'j'],
    //   ['k', 'i'],
    //   ['m', 'k'],
    //   ['k', 'l'],
    //   ['o', 'n']
    // ];
    
// undirectedPath(edges, 'j', 'm'); // -> true
    
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
