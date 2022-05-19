// semesters required
// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

// test_00:
// const numCourses = 6;
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ];
// semestersRequired(numCourses, prereqs); // -> 3
// test_01:
// const numCourses = 7;
// const prereqs = [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ];
// semestersRequired(numCourses, prereqs); // -> 5
// test_02:
// const numCourses = 5;
// const prereqs = [
//   [1, 0],
//   [3, 4],
//   [1, 2],
//   [3, 2],
// ];
// semestersRequired(numCourses, prereqs); // -> 2
// test_03:
// const numCourses = 12;
// const prereqs = [];
// semestersRequired(numCourses, prereqs); // -> 1
// test_04:
// const numCourses = 3;
// const prereqs = [
//   [0, 2],
//   [0, 1],
//   [1, 2],
// ];
// semestersRequired(numCourses, prereqs); // -> 3
// test_05:
// const numCourses = 6;
// const prereqs = [
//   [3, 4],
//   [3, 0],
//   [3, 1],
//   [3, 2],
//   [3, 5],
// ];
// semestersRequired(numCourses, prereqs); // -> 2

//   make prereqs in a graph first
//   directed acyclic graph: that's how will compelete all the courses
//   increment no of semester according to the node num each level
//   no of node in longest path is the no of sem
//   for last nodes take them on level 1 and base case for DF
//   incremet level num backwards
//   keep visited nodes 

// convert it to a adj list, traverse normally using dfs and find the longest path, note: count nodes not edges.
const semestersRequired = (numCourses, prereqs) => {
  let graph = buildGraph(numCourses, prereqs);

  let distance = {};
  for(let node in graph){
    if(graph[node].length === 0){
      distance[node] = 1;
    }
  }
  for(let node in graph){
    traverseDist(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
};


function traverseDist(graph, node, distance){
  if(node in distance) return distance[node];
  
  let maxLen = 0;
  for(let neighbor of graph[node]){
    let len = traverseDist(graph, neighbor, distance);
    if(len > maxLen) maxLen = len;
  }
  distance[node] = maxLen + 1;
  return distance[node];
}


const buildGraph = (numCourses, prereqs) => {
  const graph = {};
  
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  
  return graph;
};









