// closest carrot
// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

// test_00:
// const grid = [
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['O', 'X', 'C', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 1, 2); // -> 4
// test_01:
// const grid = [
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['O', 'X', 'C', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 0, 0); // -> 5
// test_02:
// const grid = [
//   ['O', 'O', 'X', 'X', 'X'],
//   ['O', 'X', 'X', 'X', 'C'],
//   ['O', 'X', 'O', 'X', 'X'],
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'X', 'X', 'X', 'X'],
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'C', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 3, 4); // -> 9
// test_03:
// const grid = [
//   ['O', 'O', 'X', 'O', 'O'],
//   ['O', 'X', 'X', 'X', 'O'],
//   ['O', 'X', 'C', 'C', 'O'],
// ];

// closestCarrot(grid, 1, 4); // -> 2
// test_04:
// const grid = [
//   ['O', 'O', 'X', 'O', 'O'],
//   ['O', 'X', 'X', 'X', 'O'],
//   ['O', 'X', 'C', 'C', 'O'],
// ];

// closestCarrot(grid, 2, 0); // -> -1
// test_05:
// const grid = [
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
// ];

// closestCarrot(grid, 0, 0); // -> -1



const closestCarrot = (grid, startRow, startCol) => {
    // best way breadth first search, use queue
    let visited = new Set([startRow + ',' + startCol]);
    const queue = [[startRow, startCol, 0]];
    
    while(queue.length > 0){
      const[r, c, distance] = queue.shift();
      
      if(grid[r][c] === 'C') return distance;
      const deltas = [[1,0], [-1,0], [0, 1], [0, -1]];
      
      for(let delta of deltas){
        const [ rowDelta, colDelta] = delta;
        const neighborRow = r + rowDelta;
        const neighborCol = c + colDelta;
        
        let rowBounds = 0 <= neighborRow && neighborRow < grid.length;
        let colBounds = 0 <= neighborCol && neighborCol < grid[0].length;
        let pos = neighborRow + ',' + neighborCol;
        if(rowBounds && colBounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)){
          queue.push([neighborRow, neighborCol, distance + 1]);
          visited.add(pos);
        }
      }
    }
    
    return -1;
  };
  
  
  // r = number of rows
  // c = number of columns
  // Time: O(rc)
  // Space: O(rc)