// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100


var spiralOrder = function(matrix) {
    
    
    // 4 pointers keeping track of CS/CE && RS/RE
    // start at [0,0], iterate through the first subarray first
    // alternative soln: push/pop elements depending on which row/col we are iterating through
    // we stop the loop when we hit the center, where CS === CE && RS === RE
    // we will use a while loop with the above condition
    
    // time complexity: O(m * n) where m = row.length && n === col.length    

    
    let result = [];
    let startCol = 0;
    let startRow = 0;
    let endCol = matrix[0].length-1;
    let endRow = matrix.length-1;
    
    while(result.length < matrix.length*matrix[0].length){
        // get every val in top row
        for(let col = startCol; col <= endCol; col++){
            result.push(matrix[startRow][col]);
        }

        //get all  valin last col
        for(let row = startRow+1; row <= endRow; row++){
            result.push(matrix[row][endCol]);
        }
        
        //get bottom row
        for(let col = endCol-1; col >= startCol; col--){
            if(startRow === endRow) break;
            result.push(matrix[endRow][col]);
        }
        
        //get first col
        for(let row = endRow-1; row >= startRow+1; row--){
            if(endCol === startCol) break;
            result.push(matrix[row][startCol]);
        }
        
        // change the boundries for inner left matrix
        startRow++;
        startCol ++;
        endRow --;
        endCol--;
    }
    return result;
};