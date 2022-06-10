// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

// Example 2:
// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 
// Constraints:

// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.


// Time Complexity: O(2^N * N), beacuse as nodes increse path will double, possible paths: 2^n-1 - 1
// to build each path it will be O(n) time and n-2 nodes
// Space Complexity: O(2^N * N)

var allPathsSourceTarget = function(graph) {
    let result =[];
    let path = [];
    let dst = graph.length-1;
    dfs(graph, 0, dst, result, path);  //0, 3
    //  console.log(result);
    return result;
};

    // add the src node, call its neighbors rec and aftercalling neighbor start removing the node to add diff child in it
function dfs(graph, src, dst, result, path){
    path.push(src);    //[0,2 , 3]
    if(src === dst) result.push([...path]);  // [[]] ,
    // deconstr. array beause it is passed by refernec and if pushed without decons, it will just add those pointers not the actual values.
    //especially because path arr is changing 
    for(let neighbor of graph[src]){   //[1,2] [3] 
        dfs(graph, neighbor, dst, result, path); 
    }
    path.pop();
}

// time: O(2^n * n)  // with every new node paths will double
// space:  O(2^n * n)


var allPathsSourceTarget = function(graph) {
    let adjList = buildAdjList(graph);
    let dst = graph.length -1;
    
    return traverse(adjList, 0, dst);
    
};

function traverse(adjList, root, dst){
    if(root === dst) return [[root]];
    let paths = [];
    for(let neighbor of adjList[root] ){
        let result = traverse(adjList, neighbor, dst);
        for(let sub of result){
            paths.push([root, ...sub]);
        }
    }
    return paths;
}

function buildAdjList(graph){
    let adjList = {};
    for(let i = 0; i < graph.length; i++){
        adjList[i] = graph[i];
    }
    
    return adjList;
}