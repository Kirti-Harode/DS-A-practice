const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

class MyPromise{
    constructor(callback){
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];


        try{
            callback(this._resolve, this._reject);
        } catch(err){
            this._reject(err);
        }
    }

    _resolve = (val) => {
        this.updateResult(value, STATE.FULFILLED);
    }
    _reject = (err) => {
        this.updateResult(error, STATE.REJECTED);
    }

    updateResult(value, state){

    }
    
    then(onSuccess, onFail){

    }

    catch(onFail){

    }

    finally(callback){

    }
}