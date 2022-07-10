class TreeNode {
    constructor(){
        this.val = val;
        this.children = [];
        this.end = false;
    }
}

class MyTree {
    constructor(){
        this.root = new TreeNode("Data");
    }

    insert(ele){

    }

    search(ele, currentNode){
        
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

function parseData(input){
    let root = new Node("data");

    for(let ele of input){
        let firstEle = ele[0];
        let secEle = ele[1];
        let thirdEle = ele[2];

        if(!(root.children.includes(firstEle))){
            root.children.push(new Node(firstEle));
        }
    }
}