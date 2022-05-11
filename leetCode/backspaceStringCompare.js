// Given two strings s and t, return true if they are equal when both 
// are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.



// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.


var backspaceCompare = function(s, t) {
    //     n = s sring length
    //     m = t string length
        
    //  time: O(n) + O(m) + O(n) => O(m+n)
    //  space: O(m+n)
        let stack1 = [];
        for(let char of s){
            if(char === '#'){
                stack1.pop();
            }else{
                stack1.push(char);
            }
        }
    
        let stack2 = [];
        for(let char of t){
            if(char === '#'){
                stack2.pop();
            }else{
                stack2.push(char);
            }
        }
    
        return stack1.join("") === stack2.join("")
}    
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let skipS = 0; 
    let skipT = 0;

    while(i >= 0 || j >= 0){   //s = "ab#c",  t = "ad#c"
        while(i >= 0){         // i = 3, 2
            if(s[i] === '#') { 
                skipS++;         // skipS = 1
                i --;            // i = 1
            }else if(skipS > 0){   
                skipS--;    // skipS = 0
                i--;        // i = 0
            }else{
                break;
            }
        }
    
        while(j >= 0){       //t = "ad#c"
            if(t[j] === '#') {  //j = 3, 2
                skipT++;    // skipT = 1
                j --;       // j = 1
            }else if(skipT > 0){
                skipT--;     // skipT = 0
                j--;        // j = 0
            }else{
                break;
            }
        }
    
        if(i >= 0 && j >= 0 && s[i] !== t[j]){
            return false;
        }
        if((i >= 0) !== (j >= 0) ){
            return false;
        }
        i--;
        j--;
    }
    return true;
};