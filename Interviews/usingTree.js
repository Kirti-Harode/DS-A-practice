class TreeNode {
    constructor(val){
        this.val = val;
        this.children = [];
    }
}

class MyTree {
    constructor(){
        this.root = new TreeNode("Data");
    }

    insert(node, parentNode){
        parentNode.children.push(node);

    }

    search(node, parentNode){
        if(parentNode.children.includes(node)){
            return true;
        }else{
            return false;
        }
    }
}

let a = [
    ["NewUser", "BigScreen", '1'],
    ["NewUser", "BigScreen", '2'],
    ["NewUser", "BiggestScreen", '3'],
    ["NewUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '123'],
    ["NewUser", "SmallScreen", '123123'],
    ["PrevUser", "SmallScreen", '123123'],

]

//Tree Brute force just for 3 ele =>

function parseData(input){
    let root = new TreeNode("Data");
    for(let ele of input){
        let firstEle = ele[0];
        let secEle = ele[1];
        let thirdEle = ele[2];

        let outerNode = search(firstEle, root);
        let innerNode = search(secEle, outerNode);
        innerNode.children.push(new TreeNode(thirdEle));
    }
    return root.children;
    // root.children.forEach(node => {node.children.forEach(innerNode => {console.log(innerNode)})});
}

function search(val, parentNode){
    for(let node of parentNode.children){
        if(node.val === val){
            return node;
        }
    }
    let node = new TreeNode(val);
    parentNode.children.push(node);
    return node;
}

// console.log(parseData(a));


// Best dynamic solution =>

function parseData2(input){
    let root = new TreeNode("data");
    for(let row of input){
        buildTree(row, root);
    }
    return root;
}

function buildTree(array, root){
    if(array.length === 0) return;

    let ele = array[0];
    let currNode;
    for(let node of root.children){
        if(node.val === ele){
            currNode = node;
        }
    }
    if(currNode === undefined) {
        currNode = new TreeNode(ele);
        root.children.push(currNode);
    }

    buildTree(array.slice(1), currNode);
}

console.log(parseData2(a));


// print all the leaf node values => 

