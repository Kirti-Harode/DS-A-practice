// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.


var exist = function(board, word) {
    
    let visited = new Set();
    
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[0].length; c++){
            if(traverse(board, r, c, visited, word)) return true;
        }
    }
    return false;
};

const traverse = (board, r, c, visited, word) => {
     if(word.length === 0) return true;
    if(r < 0 || c < 0|| r >= board.length || c >= board[0].length) return false;
   
    if(board[r][c] !== word[0]) return false;
    let pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);
    // if(board[r][c] === word[0]) return true;
    
    
    
    word = word.slice(1);
    
       let left = traverse(board, r, c-1, visited, word);
    
       let right = traverse(board, r, c+1, visited, word);
       let up = traverse(board, r+1, c, visited, word);
       let down = traverse(board, r-1, c, visited, word);
      visited.delete(pos)
    
    return (left || right || up || down);

}