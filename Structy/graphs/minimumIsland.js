// minimum island
// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

// test_00:
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// minimumIsland(grid); // -> 2
// test_01:
// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ];

// minimumIsland(grid); // -> 1
// test_02:
// const grid = [
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
//   ['L', 'L', 'L'],
// ];

// minimumIsland(grid); // -> 9
// test_03:
// const grid = [
//   ['W', 'W'],
//   ['L', 'L'],
//   ['W', 'W'],
//   ['W', 'L']
// ];

// minimumIsland(grid); // -> 1



const minimumIsland = (grid) => {
//   use nested loops to get r and c
//   created a visited set to track visited nodes
//   create a islandCount var
//   for each r and c call a helper funtcion which returns length of each island
//   comapre that length with island count and return min one
//   in helper function create bound for r and c return o if fail the bnound check
//   return 0 if hit "W" at any pos
//   call recursively helper function for each L pos with left, right, top and bottom.
//   and sum all results and return at the end
    
    const visited = new Set(); //o(1), lookup and insertion
    let minlen = +Infinity;
    
    for(let r = 0; r < grid.length; r++){
        for(let c= 0; c < grid[0].length; c++){
            let len = islandLen(grid, r, c, visited);
            if(len > 0 && len < minlen){
            minlen = len;
            }
        }
    }
    return minlen;
};
    
    
function islandLen(grid, r, c, visited){
    let rowBound = 0 <= r && r < grid.length;
    let colBound = 0 <= c && c < grid[0].length;
    
    if(!rowBound || !colBound) return 0;
    if(grid[r][c] === 'W') return 0;
    // if(grid[r][c] === 'L') return 1;
    
    let pos = r + ',' + c;
    if(visited.has(pos)) return 0;
    visited.add(pos);
    let size = 1;
    size += islandLen(grid, r - 1, c, visited);
    size += islandLen(grid, r + 1, c, visited);
    size += islandLen(grid, r, c - 1, visited);
    size += islandLen(grid, r, c + 1, visited);
    
    return size;
}
    
    
    // r = number of rows
    // c = number of columns
    // Time: O(rc)
    // Space: O(rc)