// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

var matrixReshape = function(mat, r, c) {
    if(r * c !== mat.length * mat[0].length){
        return mat;
    }
    
    // let flattned = [];
    // for(let i = 0; i < mat.length; i++){
    //     flattned = flattned.concat(mat[i])
    // }

    //     let j = 0;
    //     let result = [];
    //     for(let i = 0; i < r; i++){
    //         let subarr = [];
            
    //         while(subarr.length < c){
    //             subarr.push(flattned[j])
    //             j++;
    //         }
        
    //         result.push(subarr);
    //     }
    //     return result;
    
    let row = 0;
    let col = 0;
    
    let matrix = []
    for(let i = 0; i < r; i++){
        matrix.push(Array(c).fill(0))
    }
    
    let newArr = mat.flat();
    for(let k = 0; k < newArr.length; k++){
        matrix[row][col] = newArr[k];
        if(col === c - 1){
            row += 1;
            col = 0;
        }else{
            col++;
        }
    }
    return matrix;
};

//does not work yet
//     let row = matrix.length;
//     let col = matrix[0].length;
    
//     let flattned = matrix.flat();
    
//     let result = [];
//     for(let i = 0; i < col; i++){
//         result.push(Array(row).fill(0));
//     }
    
//     let r = 0; 
//     let c = 0; 
//     let resultRow = matrix[0].length;
//     let resultCol = matrix.length;
    
//     for(let k = 0; k <= (row*col); k++){
//         result[c][r] = matrix[r][c];
//         if(c === resultCol -1){
//             r ++;
//             c = 0;
//         }else{
//             c++;
//         }
//     }
    
//     return result;