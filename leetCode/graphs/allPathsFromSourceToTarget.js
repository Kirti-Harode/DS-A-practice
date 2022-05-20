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



// backtracking: 

// Backtracking is a general algorithm for finding solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

// Pseudocode
// In order to apply backtracking to a specific class of problems, one must provide the data P for the particular instance of the problem that is to be solved, and six procedural parameters, root, reject, accept, first, next, and output. These procedures should take the instance data P as a parameter and should do the following:

// root(P): return the partial candidate at the root of the search tree.
// reject(P,c): return true only if the partial candidate c is not worth completing.
// accept(P,c): return true if c is a solution of P, and false otherwise.
// first(P,c): generate the first extension of candidate c.
// next(P,s): generate the next alternative extension of a candidate, after the extension s.
// output(P,c): use the solution c of P, as appropriate to the application.

// do, recursive, undo

// Essentially, we want to implement a recursive function called backtrack(currNode, path) which continues the exploration, given the current node and the path traversed so far.

// Within the recursive function, we first define its base case, i.e. the moment we should terminate the recursion. Obviously, we should stop the exploration when we encounter our target node. So the condition of the base case is currNode == target.

// As the body of our recursive function, we should enumerate through all the neighbor nodes of the current node.

// For each iteration, we first mark the choice by appending the neighbor node to the path. Then we recursively invoke our backtrack() function to explore deeper. At the end of the iteration, we should reverse the choice by popping out the neighbor node from the path, so that we could start all over for the next neighbor node.

// Once we define our backtrack() function, it suffices to add the initial node (i.e. node with index 0) to the path, to kick off our backtracking exploration.

var allPathsSourceTarget = function(graph) {
    let n = graph.length-1;
    let result = [];
    let path = [];
    
    traverse(graph, 0, n, path, result);
    
    return result;
};


const traverse = (graph, node, dst, path, result) => {
    
    path.push(node);
    if(node === dst) result.push([...path]);
    
    for(let neighbor of graph[node]){
        traverse(graph, neighbor, dst, path, result);
    }
    
    path.pop()
}

// time: O(2^n * n)  // with every new node paths will double
// space:  O(2^n * n)