var Bitset = function(size) {
    this.bitset = Array(size).fill(0);
    this.zeroCount = this.bitset.length
    this.oneCount = 0;
    this.flipped = false;
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    if(!this.flipped && this.bitset[idx] !== 1){
        this.bitset[idx] = 1;  
    }else if(this.flipped && this.bitset[idx] === 1){
        this.bitset[idx] = 0;  
    }
     this.zeroCount -= 1;
    this.oneCount += 1;
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if(!this.flipped && this.bitset[idx] !== 0){
        this.bitset[idx] = 0;
    }else if(this.flipped && this.bitset[idx] === 0){
        this.bitset[idx] = 1;
    }
    this.zeroCount += 1;
    this.oneCount -= 1;
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    if(this.flipped){
        this.flipped = false;
        
    }else{
        this.flipped = true;
    }
    let temp = this.oneCount;
    this.oneCount = this.zeroCount;
    this.zeroCount = temp;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    if(this.oneCount === this.bitset.length) return true;
    return false;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    if(this.oneCount >= 1){
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.oneCount;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    if(this.flipped){
        for(let i = 0; i < this.bitset.length; i++){
            if(this.bitset[i] === 1){
                this.bitset[i] = 0;
            }else{
                this.bitset[i] = 1;
            }
        }
        this.flipped = false;
    }
    return this.bitset.join("")
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