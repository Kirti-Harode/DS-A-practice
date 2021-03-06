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
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
           if(traverse(board, i, j, word, visited)) return true;
        }
    }
    return false;
};

function traverse(board, row, col, word, visited){
    if(word.length === 0) return true;
    if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[0]) return false;
    let pos = row + "," + col ;
    if(visited.has(pos)) return false;
    
    visited.add(pos);
    word = word.slice(1);
    let right = traverse(board, row, col+1, word, visited);
    let left = traverse(board, row, col-1, word, visited);
    let up = traverse(board, row+1, col, word, visited);
    let down = traverse(board, row-1, col, word, visited);
    visited.delete(pos);
    return right || left || up || down;
}