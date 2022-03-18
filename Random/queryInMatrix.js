// funtion input, m = rows, n = cols, a query 2d array 
// query = [[0], [1,2], [2,1], [0]] 0 is take min. 1,2 is delete row no two. 2,1 is delete col no one.
// fill the matrix m*n by starts from 1*1 goes upto m*n.

function queryMatrix(m,n, queries){
    let rows = [];
    let cols = [];

    for(let i = 1; i <= m; i++){
        rows.push(i);
    }

    for(let i = 1; i <= n; i++){
        cols.push(i);
    }

    let min = 0;
    for(let k = 0; k < queries.length; k++){
        if(queries[k].length === 1){
            
        }
    }
    console.log(min)
}

queries = [[0], [1,2], [0], [2,1], [0]]
queryMatrix(3, 4, queries);