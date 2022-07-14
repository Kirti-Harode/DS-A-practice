let a = [
    ["NewUser", "BigScreen", '1'],
    ["NewUser", "BigScreen", '2'],
    ["NewUser", "BigScreen", '3'],
    ["NewUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '123'],
    ["NewUser", "SmallScreen",'123123']
]

obj = {
    "NewUser" : {
        "BigScreen": [ "1", "2", "3", "4"],
        "SmallScreen": ["123123"]
    },
    "OldUser": {
        "BigScreen" : ["4", "123"]
    }
};

// Using Obj =>

function parseData1(input){
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
// console.log(parseData1(a));


// Using Reduce method => 


function parseData2(input){
    let obj = {};
    for(let row of input){
        
    }
}


