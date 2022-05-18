// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 

// Example 1:


// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:


// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.
 

// Constraints:

// 1 <= n <= 2 * 105
// 0 <= edges.length <= 2 * 105
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// There are no duplicate edges.
// There are no self edges.

var validPath = function(n, edges, source, destination) {
    //     create a graph (adj list)
    //     create a set to keep track of visited nodes
    //     use dfs
    //     if source is in visited set then return false
    //     if not then add source in visited
    //     if source is equal to destination then return true
    //     loop over the neighbors of graph[src]
    //     for each neighbor call the function recursively
    //     if the result from the recursive call is true then return true
    //     after going over all the nodes return false at the end
        let graph = createGraph(edges);
        let visited = new Set();
        return explore(graph, source, destination, visited);
    };
    
    const explore = (graph, src, dst, visited) => {
        if(src === dst) return true;
        if(visited.has(src)) return false;
        visited.add(src);
        
        for(let neighbor of graph[src]){
            if(explore(graph, neighbor, dst, visited)) return true;
        }
        
        return false;
    }
    
    const createGraph = (edges) => {
        let graph = {};
        for(let edge of edges){
            let [a, b] = edge;
            if(!graph[a]) graph[a] = [];
            if(!graph[b]) graph[b] = [];
            
            graph[a].push(b);
            graph[b].push(a);
            
        }
        return graph;
    }
    
    // time:O(e) n = number of nodes, e = number of edges
    // space: O(n)