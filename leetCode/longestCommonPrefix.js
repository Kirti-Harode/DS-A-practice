var longestCommonPrefix = function(strs) {
    let shortestStr = "";
    let minLength = 201;
    for(let str of strs){
        if(str.length < minLength){
            minLength = str.length;
            shortestStr = str;
        }
    }
    
    let commonLetters = '';
    let isCommon = false;
    for(let i = 0; i < shortestStr.length; i++){
        for(let str of strs){
            if(str[i] !== shortestStr[i]){
                isCommon = false;
                break;
            }else{
                isCommon = true;
            }
        }
        if(isCommon) commonLetters += shortestStr[i];
    }
   
    
    return commonLetters;
};