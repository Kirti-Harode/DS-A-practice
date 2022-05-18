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
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(explore(grid, i , j, visited)) count ++;
        }
    }
    
    return count ;
};

const explore = (grid, r, c, visited) => {
    let pos = r + ',' + c;
    
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false;
    if(grid[r][c] === "0") return false;
    if(visited.has(pos)) return false;
    visited.add(pos);
    
    let left = explore(grid, r, c-1, visited);
    let right = explore(grid, r, c+1, visited);
    let up = explore(grid, r-1, c, visited);
    let down = explore(grid, r+1, c, visited);
    
    return true;
}

// time: O(m*n)
// space: O(m*n)
