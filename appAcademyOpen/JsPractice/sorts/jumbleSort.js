// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(string, alphabet){
    if (alphabet === undefined){
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    }
    let letters = string.split("");
    let sorted = false;
    while (!sorted){
        sorted = true;
        for (let i = 0; i < (letters.length - 1); i++){
            if(alphabet.indexOf(letters[i]) > alphabet.indexOf(letters[i+1])){
                [letters[i], letters[i+1]] = [letters[i+1], letters[i]];
                sorted = false;
            }
        }
    }
    return letters.join("");
}