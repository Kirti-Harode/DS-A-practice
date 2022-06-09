var Bitset = function(size) {
    flipped = false;
    count = 0;
    bitset = [];
    for(let i = 0; i< size; i++){
       bitset.push(0);
    }
    

//     n = size
//    time: O(n), space: O(n)
};

/** 
 * @param {number} idx
 * @return {void}
 */              
// [000] [111] => [100] [011]
Bitset.prototype.fix = function(idx) {
    if(flipped === false){
          if(bitset[idx] !== 1){
            bitset[idx] = 1;
            count++;
          }
    }else{
        if(bitset[idx] === 1){
            bitset[idx] = 0;
            count++;
          }
    }
    
  
    // console.log(count);
    
    // time:O(1)
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if(flipped === false){
        if(bitset[idx] !== 0){
            bitset[idx] = 0;
            count--;
        }
    }else{
        if(bitset[idx] === 0){
            bitset[idx] = 1;
            count--;
        }
    }
  
    // console.log(count);
    
    // time:O(1)
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
   // if(flipped === false){
   //     flipped = true;
   // }else{
   //     flipped = false;
   // }
    !flipped;
    
    count = bitset.length - count;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    // if(flipped ===  false){
         if(count === bitset.length)  return true;
        return false;
    // }else{
    //     if(count === bitset.length)  return false;
    //     return true;
    // }
  
    
    // time:O(1)
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
  // if(flipped === false){
        if(count > 0){
            return true;
        }
    
    return false;
//   }else{
//       if(count > 0){
//             return false;
//         }
    
//     return true;
//   }
      
    // time:O(1)
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
  
    return count;
    // console.log(count);
    // time:O(1)
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    if(flipped === true){
        for(let i = 0; i < bitset.length; i++){
            if(bitset[i] === 1){
                bitset[i] = 0;
            }else{
                bitset[i] = 1;
            }
        }
        flipped = false;
    }
    return bitset.join("");
    
 // time:O(n)
//     space: O(n)
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */