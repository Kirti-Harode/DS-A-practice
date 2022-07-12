let a = [
    ["NewUser", "BigScreen", '1'],
    ["NewUser", "BigScreen", '2'],
    ["NewUser", "BiggestScreen", '3'],
    ["NewUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '4'],
    ["OldUser", "BigScreen", '123'],
    ["NewUser", "SmallScreen", "myUser",'123123'],
    ["PrevUser", "SmallScreen", '123123']
]

// Basic, only for 3 ele => 
function convertToObj(input){
    let output = {};
    for(let ele of input){
        let outerKey = ele[0];
        let innerKey = ele[1];
        let innerEle = ele[2];

        if(output[outerKey] === undefined) output[outerKey] = {};
        if(output[outerKey][innerKey] === undefined) output[outerKey][innerKey] = [];

        output[outerKey][innerKey].push(innerEle);
    }
    return output;
}

// console.log(convertToObj(a));

// Best way => 
function buildNestedObj(input){ 
    let output = {};
    for(let row of input){     // ["NewUser", "BigScreen", '1'],
        let currentObj = output;
        for(let i = 0;  i < row.length-1; i++ ){
            let ele = row[i];
            if(i !== row.length-2){
                if(!(ele in currentObj)){
                    currentObj[ele] = {};
                }
                currentObj = currentObj[ele];
            }else{
                if(!(ele in currentObj)){
                    currentObj[ele] = [];
                }
                currentObj[ele].push(row[i+1]);
            }
            // currentObj[ele] = currentObj[ele] || {};
            // currentObj = currentObj[ele];
        }
    }
    return output;
}

let b = [
    ["NewUser", "BigScreen", '1'],
    ["PrevUser", "SmallScreen", '123123']
]
// console.log(buildNestedObj(a));


// find and print the last ele => 

let arr =  ["NewUser"]
let object = buildNestedObj(a)
function printLastEle(object, arr){
    let currentObj = object;
    for(let ele of arr){
        for(let key in currentObj){
            if(key === ele){
                currentObj = currentObj[ele];
                break;
            }
        }
    }
    return currentObj;
}

console.log(printLastEle(object, arr));


// Laney's solution => 
function parseData(str) {
    let parsed = {};
    const splitData = str.split('\n').slice(1).map(row => row.split(','));
    // console.log(splitData)
    for (let row of splitData) {
      let splitRow = row[1].split(' > '); //[Alliant, Demographic, Age 25-29 years]
      let metaData = [row[0]].concat(row.slice(2));
        // console.log(metaData)
      let currObj = parsed;
  
      for (let i = 0; i < splitRow.length - 1; i++) {
        const key = splitRow[i]
  
        if (i !== splitRow.length - 2) {
          currObj[key] = currObj[key]  || {};
          currObj = currObj[key];
        } else {
          currObj[key] = currObj[key]  || [];
          currObj[key].push([splitRow[i + 1], metaData.join(' | ')]);
        }
      }
    }
    return parsed;
}

let input = "alldata\nNewData , Alliant > NonDemographic > Age 40 years, newestdata\nOldData, Alliant > Demographic > Age > 25-29 years, oldestData"
// console.log(parseData(input));
