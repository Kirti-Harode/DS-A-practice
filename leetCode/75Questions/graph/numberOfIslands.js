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
    let visited = new Set();
    let count = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(isIsland(row, col, grid, visited)) count++;
        }
    }
    return count;
};

function isIsland(row, col, grid, visited){
    if(row >= grid.length || row < 0 || col < 0 || col >= grid[0].length) return false;
    if(grid[row][col] === "0") return false;
    
    let pos = row + ',' + col;
    if(visited.has(pos)) return false;
    
    visited.add(pos);
    
    isIsland(row+1, col, grid, visited);
    isIsland(row, col+1, grid, visited);
    isIsland(row-1, col, grid, visited);
    isIsland(row, col-1, grid, visited);
    return true;
}