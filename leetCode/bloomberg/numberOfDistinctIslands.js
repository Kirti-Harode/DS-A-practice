// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

// Return the number of distinct islands. 

// Example 1:


// Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
// Output: 1
// Example 2:


// Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
// Output: 3


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.


// use hash to store each island coordinates, but it is not working properly,
// time:O(nm) , space:O(nm)
var numDistinctIslands = function(grid) {
    let visited = new Set();
    let uniqueIslands = new Set();
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            let currentIsland = [];
            dfs(grid, r, c, visited, currentIsland);
            
            if(currentIsland.length === 0) continue;
            
            for(let cell of currentIsland){
                cell[0] = Math.abs(cell[0] - r);
                cell[1] = Math.abs(cell[1] - c);
            }
            // console.log(currentIsland)
           let converted = convertToStr(currentIsland)
           uniqueIslands.add(converted)
        }
    }
    return uniqueIslands.size;
};

function dfs(grid, row, col, visited, currentIsland){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if(grid[row][col] === 0) return;
    let pos = row + ',' + col;
    if(visited.has(pos)) return;
    visited.add(pos);
    
    currentIsland.push([row, col]);
    dfs(grid, row, col-1, visited, currentIsland)
    dfs(grid, row, col+1, visited, currentIsland)
    dfs(grid, row+1, col, visited, currentIsland)
    dfs(grid, row-1, col, visited, currentIsland)

}

function convertToStr(array){
    let result = []
    for(let sub of array){
        result.push(sub.join(""))
    }
    return result.join(",")
}


//using hash, with path string not coord
//best solution: time:O(nm), space:O(nm)
var numDistinctIslands = function(grid) {
    let visited = new Set();
    let uniqueIslands = new Set();
    
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            let currentIsland = [];
            dfs(grid, r, c, visited, currentIsland, "X");
            
            if(currentIsland.length === 0) continue;
            uniqueIslands.add(currentIsland.join(""))
        }
    }
    return uniqueIslands.size;
};

function dfs(grid, row, col, visited, currentIsland, path){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;  //just return; also works 
    if(grid[row][col] === 0) return;
    let pos = row + ',' + col;
    if(visited.has(pos)) return ;
    visited.add(pos);
    
    currentIsland.push(path);
    dfs(grid, row, col-1, visited, currentIsland, "L")
    dfs(grid, row, col+1, visited, currentIsland, "R")
    dfs(grid, row+1, col, visited, currentIsland, "B")
    dfs(grid, row-1, col, visited, currentIsland, "T")
    currentIsland.push("0");  //to avoid the same dir shapes like ---|      --|--, (T, horizontal L shapes)
    //add a zero when backtrack 
}