// Start with an infinite two dimensional grid filled with zeros, indexed from (1,1) at the bottom left corner with cordinates increasing 
// towards the top and right. Given a series of coordinates (r,c), where r is the ending row and c is the ending col, add 1 to each ele in the range from (1,1)
// tp (r,c) inclusive. Once all coordinates are processed, determine how many cells contain the maximal value in the grid.

// Example: 
// upRight = ['1 4', '2 3', '4 1']
// The two space seperated integers within each string represents r and c 
// output = 1

// [ [0000],
//   [0000],
//   [0000],
//   [0000] ]


// [ [1111],
//   [0000],
//   [0000],
//   [0000] ]


// [ [2221],
//   [1110],
//   [0000],
//   [0000] ]


// [ [3221],
//   [2110],
//   [1000],
//   [1000] ]

//   3 is only 1 time so output is 1


function countMax(upRight){
    let pos = upRight[0];
    let [r,c] = pos.split(" ");

    for(let pos of upRight){
        let [newR, newC] = pos.split(" ");
        if(newR < r) r = newR;
        if(newC < c) c = newC;
    }

    return r * c;
}

// let upRight = ['1 4', '2 3', '4 1'];
// let upRight = ['2 3', '3 7', '4 1'];
let upRight = ['2 5', '5 6', '8 9', '1 6'];


console.log(countMax(upRight));