// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

var generate = function(numRows) {
    let result = [];
    
    if(numRows === 1){
        return [[1]];
    }
    
    if(numRows === 2){
        return [[1], [1, 1]];
    }
    
    result.push([1], [1,1]); // [1,2,1], [1,3,3,1]
    
    while(result.length < numRows){   //5
        let prevLevel = result[result.length-1];  // [1,3,3,1]
        
        let newLevel = [1];  //1 [1,4,6,4,1]
        while(newLevel.length <= prevLevel.length){  // 1 < 3
            for(let i = 0; i < prevLevel.length-1; i++){   
                newLevel.push(prevLevel[i] + prevLevel[i+1]); //3
            }
            newLevel.push(1);
        }
        
        result.push(newLevel);
    }
    return result;
};