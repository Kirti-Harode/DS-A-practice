function DNAString(string){
    let copmliments = {"A" : "T", "T" : "A", "C" : "G", "G" : "C"};

    let result = "";

    for(let char of string){
        result = copmliments[char] + result;
    }

    return result;
}


let s = 'ACCGGGTTTT';
console.log(DNAString(s));