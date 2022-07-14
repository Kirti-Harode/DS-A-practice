let input = [
    ["NewUser", "BigScreen", '1'],
    ["NewUser", "BigScreen", '1', "3"],
    ["NewUser", "BigScreen", '3'],
    ["NewUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '123'],
    ["NewUser", "SmallScreen",'123123'],
    ["PrevUser", "SmallScreen",'123123']
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

// make a node class
// have val, children an array/obj

// split the str on new line, coma, arrow
// form an 2d array
// creat an root node
// loop over the array
// return root

// helper function -> recursive
// for first ele check if it exist in root's children
// if not make a node and add to the root's children
// recursively call the fun, with root as the node and sliced arr

// n = length of of input, m = len of each row
// time: O(nm)

class Node {
    constructor(val){
        this.val = val;
        this.children = {};
    }
}

function parseData(input){
    let root = new Node("Data");

    for(let row of input){
        insertInTree(root, row);
    }
    return root;
    // Object.values(root.children).map((child) => Object.values(child).map((node) => console.log(node)));
}

function insertInTree(root, row){
    if(row.length === 0) return;

    let node;
    let ele = row[0];
    
    if(ele in root.children){
        node = root.children[ele];
    }else{
        node = new Node(ele);
        root.children[ele] = node;
    }
    insertInTree(node, row.slice(1));
}

// console.log(parseData(input));


// Search and Print =>
let root = parseData(input);
let searchArr = ['NewUser', "BigScreen"];

function getChildNodes(root, arr){
    if(arr.length === 0) return root.children   // Object.keys(root.children);

    let ele = arr[0];

    if(ele in root.children){
       return getChildNodes(root.children[ele], arr.slice(1));
    }
}

// console.log(getChildNodes(root, searchArr));


//Print all Leafy nodes =>

function printLeafyNodes(root, output=[]){
    if(root === null) return;
    if(Object.keys(root.children).length === 0) {
        output.push(root.val);
    }else{
        for(let key in root.children){
            printLeafyNodes(root.children[key], output);
        }
    }
    return output;
}
console.log(printLeafyNodes(root));