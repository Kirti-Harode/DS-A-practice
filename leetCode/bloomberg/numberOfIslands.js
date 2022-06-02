// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


var numIslands = function(grid) {
    let count = 0;
    let visited = new Set();
    
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(findIsland(r, c, grid, visited)) count ++;
        }
    }
    return count;
};

function findIsland(r, c, grid, visited){
    if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return false;
    let pos = r + ',' + c;
    if(visited.has(pos)) return false;
    if(grid[r][c] === "0" ) return false;
    
    visited.add(pos);
    
    let left = findIsland(r, c-1, grid, visited);
    let right = findIsland(r, c+1, grid, visited);
    let top = findIsland(r+1, c, grid, visited);
    let bottom = findIsland(r-1, c, grid, visited);
    
    return true;
}