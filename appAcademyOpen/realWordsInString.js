// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

function realWordsInString(str, dictionary){

    let subStrs = [];
    // let i = 0; 
  
    // while(i < str.length){
    //     let j = i+1;
    //     while(j < str.length){
    //         let sliced = str.slice(i, j+1)
    //         if(dictionary.includes(sliced) && !subStrs.includes(sliced)){
    //             subStrs.push(sliced); 
    //         }
    //         j++;
    //     }
    //     i++;
    // }
 

    for(let a = 0; a < dictionary.length; a++){
        if(str.includes(dictionary[a])){
            subStrs.push(dictionary[a]); 
        }
    }
    return subStrs;
}

console.log(realWordsInString('cabcarcat', ["cat", "car", "cab"]));
// time complexity => O(n2)
// space complexity => O(n)
