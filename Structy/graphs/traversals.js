// Iterative DFS: 
const depthFirstPrint = (graph, source) => {
    const stack = [source];
    while(stack.length !== 0){
       let current = stack.pop();
       console.log(current);

        for(let neighbor of graph[current]){
           stack.push(neighbor);
        }
    }
};

const graph = {
    a: ['b', 'c'],   // ['c', 'b']
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph, 'a') // acebdf to change this to abdfce change the b and c in graphs a value


// Recursive DFS:

const depthFirstPrint = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]){
        depthFirstPrint(graph, neighbor);
    }
};


// Breadth First: 

const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while(queue.length !== 0){
       let current = queue.shift();
       console.log(current);

        for(let neighbor of graph[current]){
           queue.push(neighbor);
        }
    }
};

breadthFirstPrint(graph, 'a'); // acbedf;
