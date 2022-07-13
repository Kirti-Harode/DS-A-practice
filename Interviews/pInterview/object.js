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

// assign an empty obj
// loop over each row upto the sec last ele
// set currobj to obj
// check if i is not at sec last
// check if ele exist in the currobj
// if not set it to an empty obj
// change currObj to inner obj
// when i is at sec last ele
// assign it to an empty arr if not present
// push the last ele in the array
// return obj

function parseData(input){
    let obj = {};

    for(let row of input){
        let currObj = obj;

        for(let i = 0; i < row.length-1; i++){
            let ele = row[i];
            if(i !== row.length-2){
                if(!(ele in currObj)){
                    currObj[ele] = {};
                }
                currObj = currObj[ele];
            }else{
                if(!(ele in currObj)){
                    currObj[ele] = [];
                }
                currObj[ele].push(row[i+1]);
            }
        }
    }
    return obj;
}

// console.log(parseData(input));


// Search & Print =>
let outputObj = parseData(input);
let array = ["NewUser"];

function search(obj, array){
    let currObj = obj;
    for(let ele of array){
        if(ele in currObj){
            currObj = currObj[ele];
        }
    }
    return currObj;
}

console.log(search(outputObj, array));