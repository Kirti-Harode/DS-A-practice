// prereqs possible
// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

// test_00:
// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
// ];
// prereqsPossible(numCourses, prereqs); // -> true
// test_01:
// const numCourses = 6;
// const prereqs = [
//   [0, 1],
//   [2, 3],
//   [0, 2],
//   [1, 3],
//   [4, 5],
//   [3, 0],
// ];
// prereqsPossible(numCourses, prereqs); // -> false
// test_02:
// const numCourses = 5;
// const prereqs = [
//   [2, 4],
//   [1, 0],
//   [0, 2],
//   [0, 4],
// ];
// prereqsPossible(numCourses, prereqs); // -> true
// test_03:
// const numCourses = 6;
// const prereqs = [
//   [2, 4],
//   [1, 0],
//   [0, 2],
//   [0, 4],
//   [5, 3],
//   [3, 5],
// ];
// prereqsPossible(numCourses, prereqs); // -> false
// test_04:
// const numCourses = 8;
// const prereqs = [
//   [1, 0],
//   [0, 6],
//   [2, 0],
//   [0, 5],
//   [3, 7],
//   [4, 3],
// ];
// prereqsPossible(numCourses, prereqs); // -> true
// test_05:
// const numCourses = 8;
// const prereqs = [
//   [1, 0],
//   [0, 6],
//   [2, 0],
//   [0, 5],
//   [3, 7],
//   [7, 4],
//   [4, 3],
// ];
// prereqsPossible(numCourses, prereqs); // -> false
// test_06:
// const numCourses = 42;
// const prereqs = [[6, 36]];
// prereqsPossible(numCourses, prereqs); // -> true



// n = numCourses
// p = prereqs 
// time: O(n+p), space: O(n+p)

const prereqsPossible = (numCourses, prereqs) => {
    //   use cycle detection: if cycle then not possible to complete all the courses
    //   white-grey-black algorithm
    let graph = buildGraph(numCourses, prereqs);
    let visited = new Set();
    let visiting = new Set();
      // console.log(graph)
    for(let node in graph){
        if(hasCycle(graph, node, visited, visiting)) return false;
    }
    return true;
};
    
function hasCycle(graph, node, visited, visiting){
    if(visited.has(node)) return false;
      
    if(visiting.has(node)) return true;
      visiting.add(node);
      
    for(let neighbor of graph[node]){
       if( hasCycle(graph, neighbor, visited, visiting)) return true;
    }
      
    visiting.delete(node);
    visited.add(node);
      
    return false;
}
    
    
function buildGraph(numCourses, prereqs){
    let graph = {};
    for(let i = 0; i < numCourses; i++){
        graph[i] = [];
    }
    
    for(let prereq of prereqs){
        let [a, b] = prereq;
        graph[a].push(String(b)); 
    }
    return graph;
}