// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2){
    let counter = {};

    for(let i = 0; i < str1.length; i++){
        if(str1[i] in counter){
            counter[str1[i]] ++;
        }else{
            counter[str1[i]] = 1;
        }
    }

    for(let j = 0; j < str1.length; j++){
        if(str2[j] in counter){
            counter[str2[j]] --;
        }
    }
    console.log(counter)
    for(let keys in counter){
        if(counter[keys] !== 0) return false;
    }

    return true;
}

console.log(anagrams('listen', 'silent')) //=> true
console.log(anagrams('listen', 'potato') )//=> false

// time complexity:  O(n)
// space coplexity: O(n)