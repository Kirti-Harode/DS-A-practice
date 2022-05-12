// Shortest Cell Path
// In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. 
// Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

// Each location in the path, including the start and the end, must be a 1. 
// Each subsequent location in the path must be 4-directionally adjacent to the previous location.

// It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

// If the task is impossible, return -1.

// Examples:

// input:
// grid = [
//     [1, 1, 1, 1], 
//     [0, 0, 0, 1], 
//     [1, 1, 1, 1]
//    ]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: 8
// (The lines below represent this grid:)
// 1111
// 0001
// 1111

// grid = [
//     [1, 1, 1, 1], 
//     [0, 0, 0, 1], 
//     [1, 0, 1, 1]
// ]
// sr = 0, sc = 0, tr = 2, tc = 0
// output: -1
// (The lines below represent this grid:)
// 1111
// 0001
// 1011
// Constraints:

// [time limit] 5000ms
// [input] array.array.integer grid
// 1 ≤ arr.length = arr[i].length ≤ 10
// [input] integer sr
// [input] integer sc
// [input] integer tr
// [input] integer tc
// All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
// [output] integer

// not working yet
function shortestCellPath(grid, sr, sc, tr, tc){
    if( sr === grid.length || sc === grid[0].length || grid[sr][sc] === 0) return 0;
    if(sr === tr && sc === tc || grid[sr][sc] === 1) return 1;

    const downCount = shortestCellPath(grid, sr+1, sc);
    const rightCount = shortestCellPath(grid, sr, sc+1);
    const leftCount = shortestCellPath(grid, sr, sc-1);
    const upCount = shortestCellPath(grid, sr-1, sc);


    return downCount + rightCount + leftCount + upCount;
}

// grid = [
//     [1, 1, 1, 1], 
//     [0, 0, 0, 1], 
//     [1, 0, 1, 1]
// ]
// sr = 0, sc = 0, tr = 2, tc = 0



let grid = [
    [1, 1, 1, 1], 
    [0, 0, 0, 1], 
    [1, 1, 1, 1]
    ]
let sr = 0
let sc = 0
let tr = 2
let tc = 0

console.log(shortestCellPath(grid, 0, 0, 2, 0));