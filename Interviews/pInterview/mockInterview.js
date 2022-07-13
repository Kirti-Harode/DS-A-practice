// let a = [
//     ["NewUser", "BigScreen", '1'],
//     ["NewUser", "BigScreen", '1', "x"],
//     ["NewUser", "BigScreen", '3'],
//     ["NewUser", "BigScreen", '4'],
//     ["OldUser", "BigScreen", '4'],
//     ["OldUser", "BigScreen", '123'],
//     ["NewUser", "SmallScreen",'123123']
// ]

// let a = [
//     ["NewUser", "BigScreen", '1'],
//     ["NewUser", "BigScreen", '2'],
//     ["NewUser", "BiggestScreen", '3'],
//     ["NewUser", "BigScreen", '4'],
//     ["OldUser", "BigScreen", '4'],
//     ["OldUser", "BigScreen", '123'],
//     ["NewUser", "SmallScreen", "myUser",'123123'],
//     ["PrevUser", "SmallScreen", '123123']
// ]
// loop over the input
// currobj assign it to obj
// loop over the row, loop upto sec last ele
// for each ele check if exists in the currObj
// point it to an empty {}
// currobj = currobj[ele]
// if i is at sec last point it to an empty [], push last ele in to the arr
// return the obj


// function parseData(input){
//     let obj = {};

//     for(let row of input){ //     ["NewUser", "BigScreen", '1', "x"],
//         let currentObj = obj;  //  [1]
//         for(let i = 0; i < row.length-1; i++){   // 0
//             let ele = row[i];  //"NewUser"
//             if(i !== row.length-2){
//                 if(!(ele in currentObj)){
//                     currentObj[ele] = {};
//                 }
//                 currentObj = currentObj[ele];  // {"BigScreen": [1: [x]]}
//             }else{
//                 if(!(ele in currentObj)){
//                     currentObj[ele] = [];
//                 }
//                 currentObj[ele].push(row[i+1]);
//             }
            
//         }
//     }
//     return obj;
// }

// console.log(parseData(a));


let a = [
    ["NewUser", "BigScreen", '1'],
    ["NewUser", "BigScreen", '1', "x"],
    ["NewUser", "BigScreen", '3'],
    ["NewUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '123'],
    ["NewUser", "SmallScreen",'123123']
]


obj = {
    "NewUser" : {
        "BigScreen": [ '1', '2', '3', '4'],
        "SmallScreen": ["123123"]
    },
    "OldUser": {
        "BigScreen" : ["4", "123"]
    }
};


class Node {
    constructor(val){
        this.val = val;
        this.children = [];
    }
}

function parseData(input){
    let root = new Node("data");

    for(let row of input){
        insertIntoTree(root, row);
    }
    root.children.map((node) => node.children.map((child) => console.log(child)));
}

function  insertIntoTree(root, arr){
    if(arr.length === 0) return;
    let ele = arr[0];
    let node;
    for(let child of root.children){
        if(child.val === ele){
            node = child;
            break;
        }
    }
    if(node === undefined){
        node = new Node(ele);
        root.children.push(node);
    }

    insertIntoTree(node, arr.slice(1));
}
        
console.log(parseData(a));