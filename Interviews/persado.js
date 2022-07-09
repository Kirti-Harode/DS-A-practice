// The elements are listed before the arrows and values for each element are divided by the pipe characters.
//  This grammar has four elements: 'sentence', 'intro', 'benefit' and 'cta'. 
//  The sentence element organizes the other elements into the structure: 
//  "intro " then a comma and a space then 'benefit' then another comma and a space then an exclamation point.

// if we were to combine these values in the messages occurred according to the sentence, any of this example could result: 
// hi, Lucky you, click here!
// Hello, lucky you, visit us!
// Hey, just for you, click here!

// Task: given the above grammer, string, write a method in Ruby that convert it to a hash 
// where elements or keys and values are an array of strings.

// sentence = ['[intro], [benefit], [cta]', '[intro], [cta], [benefit]']
// input = "intro->hi|hello|hey||benefit->Lucky you|just for you||cta->click here!|visit us!"

function printSentence(input, sentence){
    let obj = {};
    let inputArr = input.split("||");
    for(let ele of inputArr){
        let eleArr = ele.split("->");
        obj[eleArr[0]] = [];

        let valuesArr = eleArr[1].split("|");
        for(let val of valuesArr){
            obj[eleArr[0]].push(val);
        }
    }
    
    let output = [];
    for(let sent of sentence){
        let newSent = "";
       let arr = sent.split(",");
       for(let i = 0; i < arr.length; i++){
            if(arr[i] === '[intro]'){
               let index = Math.floor(Math.random() * obj['intro'].length);
                newSent += obj['intro'][index];
            }
            if(arr[i] === '[benefit]'){
                let index = Math.floor(Math.random() * obj['benefit'].length);
                newSent += obj['benefit'][index];
            }
            if(arr[i] === '[cta]'){
                let index = Math.floor(Math.random() * obj['cta'].length);
                newSent += obj['cta'][index];
            }
            if(i !== arr.length-1) newSent += ', '
       }
       newSent += '!';
       output.push(newSent);
    }
    // console.log(output);
    return output;
}

let sentence = ['[intro],[benefit],[cta]', '[intro],[cta],[benefit]'];
let input = "intro->Hi|Hello|Hey||benefit->Lucky you|Just for you||cta->Click here|Visit us";

console.log(printSentence(input, sentence));