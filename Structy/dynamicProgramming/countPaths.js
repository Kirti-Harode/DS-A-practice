// count paths
// Write a function, countPaths, that takes in a grid as an argument. 
// In the grid, 'X' represents walls and 'O' represents open spaces. 
// You may only move down or to the right and cannot pass through walls. 
// The function should return the number of ways possible to travel from the top-left corner of the grid 
// to the bottom-right corner.

// test_00:
// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ];
// countPaths(grid); // -> 2
// test_01:
// const grid = [
//   ["O", "O", "X"],
//   ["O", "O", "O"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 5
// test_02:
// const grid = [
//   ["O", "O", "O"],
//   ["O", "O", "X"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 3
// test_03:
// const grid = [
//   ["O", "O", "O"],
//   ["O", "X", "X"],
//   ["O", "O", "O"],
// ];
// countPaths(grid); // -> 1
// test_04:
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "X", "O", "O", "O"],
//   ["X", "O", "X", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 0
// test_05:
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
//   ["X", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 42
// test_06:
// const grid = [
//   ["O", "O", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
//   ["X", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X"],
// ];
// countPaths(grid); // -> 0
// test_07:
// const grid = [
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 40116600
// test_08:
// const grid = [
//   ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
//   ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
// ];
// countPaths(grid); // -> 3190434

// r = # rows
// c = # columns
// Time: O(2^(r+c)) 2's power bcos it forms a binary tree
// Space: O(r*c)
const countPaths = (grid, r=0, c=0) => {
    // base case is the bottom right corner  return 1
    // visualize using tree(binary tree bcos can move only in right and down)
    
    if(r === grid.length || c === grid[0].length || grid[r][c] === 'X')return 0;
    if(r === grid.length-1 && c === grid[0].length-1) return 1;
    const downCount = countPaths(grid, r+1, c);
    const rightCount = countPaths(grid, r, c+1);
    return downCount + rightCount;
};
  

// dynamic programming with memorization:
// r = # rows
// c = # columns
// Time: O(r*c)
// Space: O(r*c)
const countPaths = (grid, r=0, c=0, memo={}) => {
    const pos = r + ',' + c;
    if(pos in memo) return memo[pos];
    if(r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
    if(r === grid.length-1 && c === grid[0].length-1) return 1;
    const downCount = countPaths(grid, r+1, c, memo);
    const rightCount = countPaths(grid, r, c+1, memo);
    memo[pos] = downCount + rightCount;
    return memo[pos];
};
  