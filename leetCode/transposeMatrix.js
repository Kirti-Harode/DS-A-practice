// // Given a 2D integer array matrix, return the transpose of matrix.

// // The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109


var transpose = function(matrix) {
    let result = [];  
    for(let i = 0; i < matrix[0].length; i++){
        let sub = [];
        for(let j = 0; j < matrix.length; j++){
            sub.push(matrix[j][i]);
        }
        result.push(sub)
    }
    return result;
};


var transpose = function(matrix) {
    let newMatrix = []
    let newMatrixRow = matrix[0].length
    let newMatrixCol = matrix.length
    for (i = 0; i < matrix[0].length; i++) {
        newMatrix.push(Array(newMatrixCol).fill(null))
    }
    let row = 0 
    let col = 0 
    let count = 0
    while (count < newMatrixRow*newMatrixCol) {
        count += 1
        let val = matrix[row][col]
        newMatrix[col][row] = val 
        if (col === matrix[0].length -1) {
            row += 1
            col = 0
        } else {
            col += 1
        }
    }
    return newMatrix
};