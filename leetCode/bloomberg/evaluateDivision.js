// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]
 
// Constraints:

// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.


var calcEquation = function(equations, values, queries) {
    //     1) build adjecancy list 
    //      a 
    //  1/2 | 2
    //      b
    let graph = {};
    
    for(let i = 0 ; i < equations.length; i++){
        let [a, b] = equations[i];
        
        if(graph[a] === undefined){
            graph[a] = {};
        }
        graph[a][b] = values[i];     // assign the edge a to b to 2.0
        
        if(graph[b] === undefined){
            graph[b] = {};
        }
        graph[b][a] = (1 / values[i]).toFixed(6);   // assign the edge val b to a to 1/2.0
    }
        // console.log(graph)
    //     2) calculate result
    let result = []
    for(let i = 0; i < queries.length; i++){
        let [a, b] = queries[i];
        if(graph[a] === undefined && graph[b] === undefined){
            result.push(-1.0);
        }else if(a === b){
            result.push(1.0);
        }else {
            let visited = new Set();
            let product = 1;
            result.push(dfs(graph, a, b, product, visited));  // 3) do dfs, traverse over graph
        }
    }
    return result;
};
    
    
function dfs(graph, start, end, product, visited){
    visited.add(start);
    let ans = -1;
    let neighbors = graph[start];
    console.log(neighbors)
    if(neighbors[end]){
        ans = product * neighbors[end];
    }else{
        let array = Object.entries(neighbors)
        for(let ele of array){
            let[key, val] = ele;
            if(!visited.has(key)){
                ans = dfs(graph, key, end, product*val, visited);
            }
            if(ans !== -1) {
                break;
            }
        }
    }
    return ans;
}


// using bfs: 
var calcEquation = function(equations, values, queries) {
    let graph = {};
    
    for(let i = 0; i < equations.length; i++){
        let [nom, dem]  = equations[i];   //neumoretor, denominator
        if(graph[nom] === undefined){
            graph[nom] = []
        }
        graph[nom].push([dem, values[i]])
        
        if(graph[dem] === undefined){
            graph[dem] = []
        }
        graph[dem].push([nom, 1/values[i]])
    }
    console.log(graph)
    let result = [];
    for(let query of queries){
        result.push(evaluate(query, graph));
    }
    return result;
};

function evaluate(query, graph){
    const [nom, denom] = query;
  if (!(nom in graph) || !(denom in graph)) return -1;
  if (nom === denom) return 1;
  
  let queue = graph[nom].slice();
  let visited = new Set();
  
  while (queue.length) {
      const [variable, value] = queue.shift();
      
      if (variable === denom) return value;
      visited.add(variable);
      
      const next = graph[variable];
      next.forEach(([next, nextValue]) => {
          if (visited.has(next)) return;
          queue.push([next, nextValue * value]);
      });
  }
  return -1;
}