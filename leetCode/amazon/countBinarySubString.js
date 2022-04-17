var countBinarySubstrings = function(s) {
    //     create an output count set to 0
    //     loop over s
    //     set start at index 0, increment i
    //     count the first num freq, when that breaks save that index to an mid var
    //     from mid find same num of other ele
    //     if not equal to first nums freq then use the second freq and add it to output 
    //     set start to mid now, and repeat
    //     return outpu at the end
        
    //     let output = 0;
    //     let i = 0;
    //     let start = 0;
    //     let count = 0;
    //     while(i < s.length){
    //         if(s[start] === s[i]){
    //             i++;
    //             count ++;   
    //         }else{
    //             start = i;
    //             count = 0;
    //         }
            
    //     }
        
        
        
    //     from solution
        
        let groups = [];
        
        let count = 0;
        let start = 0;
        let i = 0;
        while(i < s.length){
            if(s[start] === s[i]){
                i++;
                count ++;   
            }else{
                groups.push(count);
                start = i;
                count = 0;
            }        
        }
        groups.push(count);
        let total = 0;
        for(let j = 0; j < groups.length-1; j++){
            if(groups[j] <= groups[j+1]){
                total += groups[j];
            }else{
                total += groups[j+1];  
            }
            
        }
        return total;
};


// Complexity Analysis

// Time Complexity: O(N)O(N), where NN is the length of s. Every loop is through O(N)O(N) items with O(1)O(1) work inside the for-block.

// Space Complexity: O(N)O(N), the space used by groups.