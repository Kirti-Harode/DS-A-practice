const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

// Note: A promise is executed as soon as it is created, that means our promise callback function will be called 
// inside the constructor with reject and resolve methods passed as parameters to it.
class MyPromise{
    constructor(callback){
        // Initial state of Promise is pending(empty)
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];

// Invoke callback by passing the _resolve and the _reject function of our class
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
        this.updateResult(err, STATE.REJECTED);
    }

    updateResult(value, state){
        // This is to make the processing async
        setTimeout(() => {
            // Process the promise if it is still in pending state. An already rejected or resolved promise is not processed
            if(this.state !== STATE.PENDING) return;
            // check is value is also a promise
            if(this.isThanble(value)){
                return value.then(this._resolve, this._reject);
            }

            this.value = value;
            this.state = state;
            // execute handlers if already attached
            this.executeHandlers();
        }, 0)
    }
    
    isThanble(val){
        return val instanceof MyPromise;
    }

    then(onSuccess, onFail){
        return new MyPromise((res, rej) => {
            this.addHandlers({
                onSuccess: function(val){
                    if(!onSuccess) return res(val);

                    try{
                        return res(onSuccess(val))
                    }catch(err){
                        return rej(err);
                    }
                },

                onFail: function(value){
                    if(!onFail){
                        return rej(value)
                    }
                    try{
                        return res(onFail(val))
                    }catch(err){
                        return rej(err);
                    }
                }

            })
        })
    }

    addHandlers(handlers){
        this.handlers.push(handlers);
        this.executeHandlers();
    }

    executeHandlers(){
        if(this.state === STATE.PENDING) return null;

        this.handlers.forEach(handler => {
            if(this.state === STATE.FULFILLED){
                return handler.onSucess(this.value);
            }
            return handler.onFail(this.value);
        });
        this.handlers = [];
    }

    catch(onFail){
        return this.then(null, onFail);
    }

    finally(callback){
        return new Promise((res, rej) => {
            let val;
            let wasRejected;
            this.then((value) => {
                wasRejected = false;
                val = value;
                return callback();
            }, err => {
                wasRejected = true;
                val = err;
                return callback();
            }).then(() => {
                if(!wasRejected){
                    return res(val);
                }
                return rej(val);
            })
        })
    }
}

let test = new MyPromise(resolve => console.log(2));
console.log(test)
// finally() method returns a Promise which will be settled with previous fulfilled or rejected value.
// The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

// The finally() method is very similar to calling .then(onFinally, onFinally) however there are a couple of differences:

// When creating a function inline, you can pass it once, instead of being forced to either declare it twice, or create a variable for it

// Unlike Promise.resolve(2).then(() => {}, () => {}) (which will be resolved with undefined), Promise.resolve(2).finally(() => {}) will be resolved with 2.

// Similarly, unlike Promise.reject(3).then(() => {}, () => {}) (which will be fulfilled with undefined), Promise.reject(3).finally(() => {}) will be rejected with 3.