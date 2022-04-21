// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

// test_00:
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// islandCount(grid); // -> 3
// test_01:
// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ];

// islandCount(grid); // -> 4
// test_02:
// const grid = [
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
// ];

// islandCount(grid); // -> 1
// test_03:
//  const grid = [
//   ['W', 'W'],
//   ['W', 'W'],
//   ['W', 'W'],
// ];

// islandCount(grid); // -> 0




const islandCount = (grid) => {
//   use nested loops to get r and c
//   create a new function  explore which returns true if found l and false if found w;
//   create visited set to keep track of visited nodes or pos
//   increment count every time explore function return true;
//   check for bounds of r and c
//   in explore function base case are r and c bounds and if r and c is w return false
//   check if position is visited or not
//   add pos to set by converting them to string bcos in set cann't put a subarr because it checks by refence not val
//   recursively call explor function for left right and top bottom pos
//   return count at the end
    
    
    const visited = new Set();
    let count = 0;
    
    for(let r = 0; r < grid.length; r++){
        for(let c= 0; c < grid[0].length; c++){
            if(explore(grid, r, c, visited)){
            count ++;
            }
        }
    }
    return count;
};

    
const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if(!rowInBounds || !colInBounds)  return false;
    if(grid[r][c] === 'W') return false;
    
    const pos = r + ',' + c;
    
    if(visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);
    
    return true;
    
}

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)