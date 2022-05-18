// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    let visited = new Set();
    for(let r = 0; r < grid.length ; r++){
        for(let c = 0; c < grid[0].length; c++){
            let count = explore(grid, r, c, visited);
            // console.log(count)
            if(count >= max) max = count;
        } 
    }
    return max;
};

const explore = (grid, r, c, visited) => {
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return 0;
    if(grid[r][c] === 0) return 0;
    // if(grid[r][c] === 1) return 1;
    
    let pos = r + "," + c;
    if(visited.has(pos)) return 0;
    visited.add(pos);
    
    let count = 1;   //1 for current pos
     count += explore(grid, r-1, c, visited);
     count += explore(grid, r, c-1, visited);
     count += explore(grid, r, c+1, visited);
     count += explore(grid, r+1, c, visited);
    
    return count;
    
}