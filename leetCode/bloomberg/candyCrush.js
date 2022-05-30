// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

// The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the stable board.

// Example 1:

// Input: board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
// Output: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]
// Example 2:

// Input: board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
// Output: [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]
 
// Constraints:

// m == board.length
// n == board[i].length
// 3 <= m, n <= 50
// 1 <= board[i][j] <= 2000



var candyCrush = function(board) {
    //     board[i][j] == 0 empty space
    //     drop candies where there is zeros
        
    //     set a var. done or stable to true
    //     itrerate over each pos, in group of three and check if they are same
    //     if there are same then replace them by the negative of their val and set done to false
    //     in other loop take each pos in group of three colmun vise
    //     check if all same if true the replace them with their negative val and set done to false
    //     replace all the non zero/negative val in a col to the bottom and at the top fill zeros
    //     if done is true return the board otherwise randomly call the function
        
        
    if(board.length === 0) return board;
    
    let done = true;
    
//     step 1: CRUSH ROWS
    
    for(let r = 0; r < board.length ; r++){    //board.length - 2 bcos checking for group of 3 nums
        for(let c = 0; c < board[0].length - 2; c++){
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r][c+1]);
            let num3 = Math.abs(board[r][c+2]);
            
            if(num1 === num2 && num1 === num3 && num1 !== 0){
                board[r][c]   = -num1;
                board[r][c+1] = -num1;
                board[r][c+2] = -num1;
                done = false;
            }
        }
    }
    
//     step 1: CRUSH COLS
    
    for(let c = 0; c < board[0].length; c++){    //board.length - 2 bcos checking for group of 3 nums
        for(let r = 0; r < board.length - 2; r++){
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r+1][c]);
            let num3 = Math.abs(board[r+2][c]);
            
            if(num1 === num2 && num1 === num3 && num1 !== 0){
                board[r][c]   = -num1;
                board[r+1][c] = -num1;
                board[r+2][c] = -num1;
                done = false;
            }
        }
    }
    
//     step 3: Gravity
    if(done === false){
        for(let c = 0; c < board[0].length; c++){
            let idx = board.length - 1;
        // move all positive non zero nums down        
            for(let r = board.length-1; r >= 0; r--){
                if(board[r][c] > 0){
                    board[idx][c] = board[r][c];
                    idx -= 1;
                }
            }
        // fill all the empty spaces by 0
            for(let r = idx; r >= 0; r--){
                board[r][c] = 0;
            }
        }
    }
    
    
    if(done === true){
        return board;
    }else{
        return candyCrush(board);
    }
};
// R = num of rows
// C = num of cols
// time : O((R*C)^2) 
// space: O(1)

// It's O((R*C)^2) complexity because each function call scans the board three times so it's 3(R*C). 
// If we only crush 3 candies each time, the function will be called (R*C)/3 times. Multiply those two terms together you get O((R*C)^2).