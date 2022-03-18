// 1) pattern -> str amazing, 010 vcv Count  
// 3) rotation 

// find in string according to the code 

function findInStr(word, code){
    let vowels = 'aeiou';
    code = '010';
    let replaced = '';
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            replaced += 0;
        }else{
            replaced += 1;
        }
    }
    // console.log(replaced)
    let i = 0; 
    let j = code.length;
    let count = 0;
    while(i < replaced.length){
      if(replaced.slice(i, j) === code){
        count ++;
      }
      i++;
      j += 1;
    }
    console.log(count)
}

findInStr("amazing", "010");