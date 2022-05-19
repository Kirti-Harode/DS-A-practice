// best bridge
// Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

// test_00:
// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 1
// test_01:
// const grid = [
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["L", "L", "W", "W", "L"],
//   ["W", "L", "W", "W", "L"],
//   ["W", "W", "W", "L", "L"],
//   ["W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 2
// test_02:
// const grid = [
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["L", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 3
// test_03:
// const grid = [
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "L", "W", "W"],
//   ["W", "W", "W", "W", "L", "L", "W", "W"],
//   ["W", "W", "W", "W", "L", "L", "L", "W"],
//   ["W", "W", "W", "W", "W", "L", "L", "L"],
//   ["L", "W", "W", "W", "W", "L", "L", "L"],
//   ["L", "L", "L", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 3
// test_04:
// const grid = [
//   ["L", "L", "L", "L", "L", "L", "L", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "L", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "W", "W", "W", "W", "W", "W", "L"],
//   ["L", "L", "L", "L", "L", "L", "L", "L"],
// ];
// bestBridge(grid); // -> 2
// test_05:
// const grid = [
//   ["W", "L", "W", "W", "W", "W", "W", "W"],
//   ["W", "L", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W", "L", "W"],
//   ["W", "W", "W", "W", "W", "W", "L", "L"],
//   ["W", "W", "W", "W", "W", "W", "W", "L"],
// ];
// bestBridge(grid); // -> 8

// locate the first island then use bfs to find the second island and return min nodes to find it

const bestBridge = (grid) => {
    let mainIsland;
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[0].length; c++){
        let potentialIsland = traverseIsland(grid, r, c, new Set());
        if(potentialIsland.size > 0) {
          mainIsland = potentialIsland;
          break;
        }
      }
    }
    
    let visited = new Set(mainIsland);
    let queue = [];
    for(let pos of mainIsland){
      let [r, c ] = pos.split(',').map(Number)   //convert them to number
      queue.push([r, c, 0]); 
    }
    
    while(queue.length > 0){
      let [r, c, dist] = queue.shift();
      let pos = r + ',' + c;
      if(grid[r][c] === 'L' && !mainIsland.has(pos)){
        return dist - 1;
      }
      
      let deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      
      for(let delta of deltas){
        let [deltaRow, deltaCol] = delta;
        let newRow  = r + deltaRow;
        let newCol  = c + deltaCol;
        let newPos = newRow + ',' + newCol;
        
        const rowInBounds = 0 <= newRow && newRow < grid.length;
        const colInBounds = 0 <= newCol && newCol < grid[0].length;
        if( rowInBounds && colInBounds && !visited.has(newPos)){
          visited.add(newPos)
          queue.push([newRow, newCol, dist+1])
        }
      }
    }
};
  
function traverseIsland(grid, r, c, visited){
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return visited;
    if(grid[r][c] === 'W') return visited;
    
    let pos = r + ',' + c;
    if(visited.has(pos)) return visited;
    visited.add(pos);
    
    traverseIsland(grid, r+1, c, visited);
    traverseIsland(grid, r-1, c, visited);
    traverseIsland(grid, r, c-1, visited);
    traverseIsland(grid, r, c+1, visited);
    return visited;
}
  
  // r = number of rows
  // c = number of columns
  // Time: O(rc)
  // Space: O(rc)
  