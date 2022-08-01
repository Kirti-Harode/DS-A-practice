const STATE ={
    FULFILLED: 'fulfilled',
    PENDING: 'pending',
    REJECTED: 'rejected'
}
// prmises resolve and rejects immideately but they are async

class MyPromise{
    constructor(callabck){  //cb => to call the resolve or reject right away

        this.thenCbs = [];
        this.catchCbs = [];
        this.state = STATE.PENDING;
        this.value = undefined;

        try{   // wrapping it in try catch so if the promise has an err goes to catch and just call reject
            callabck(this.onSuccess, this.onFail);
        }catch(err){
            this.onFail(err);
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
        this.runCallbacks = this.runCallbacks.bind(this);

    }

    runCallbacks(){
        queueMicrotask(() => { 
            if(this.state === STATE.FULFILLED){
                this.thenCbs.forEach(cb => {
                    cb(this.value)
                });
                this.thenCbs = []; // remove callbacks so they don't run again
            }

            if(this.state === STATE.REJECTED){
                this.catchCbs.forEach(cb => {
                    cb(this.value)
                })
                this.catchCbs = [];
            }

        })
    }
    onSuccess(value){
        queueMicrotask(() => {   // prmises resolve and rejects immideately but they are async. so w are passing them to the microtask
            if(this.state !== STATE.PENDING) return;

            if(value instanceof MyPromise){ // if then is returing a promise instead of val 
                value.then(this.onSuccess, this.onFail); // wait for that promise to resolve/reject and after that use .then
                return;    //to call onsuccess and onfail and just return
            }
            this.value = value;
            this.state = STATE.FULFILLED;
            this.runCallbacks();
        })
        
    }

    onFail(value){
        queueMicrotask(() => { 
        if(this.state !== STATE.PENDING) return;

        if(value instanceof MyPromise){ 
            value.then(this.onSuccess, this.onFail);
            return; 
        }

        if(this.catchCbs.length === 0){ // if there is an err but no catch blog that means the err cb not in this.catchCbs so just give a big error and warning
            console.error('error' + value);
        }
        this.value = value;
        this.state = STATE.REJECTED;
        this.runCallbacks();
    })

    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
            this.thenCbs.push(res => {   // res is resolve("res"), "res" variable
                if(onFulfilled === null){ // if onFull is not ther taht meanins it is a catch, which doesnot care about resolve, so just return from there to attach next then
                    resolve(res);
                    return;
                }

                try{  // wrapping in try catch because if there is an err catch block will catch and reject it
                    resolve(onFulfilled(res)) // pass the val to cb and then resolve so the return val pass to the next then
                }catch(err){
                    reject(err);
                }
            })
            if(onFulfilled) this.thenCbs.push(onFulfilled);
            if(onRejected) this.catchCbs.push(onRejected);
             this.runCallbacks(); // immediately run the callback


             this.catchCbs.push(res => {
                if(onRejected === null){
                    reject(res);
                    return;
                }

                try{
                    resolve(onRejected(res)) // if onReject return successfully then resolve
                }catch(err){
                    reject(err)
                }
             })
        })
       
    }

    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    finally(cb){  // finally doesn't take in any result, and doesn't pass any val
        //so call then but make two cb without passing an val to them
        return this.then(result => {
            cb();
            return result; // to chain on to further promises
        }, err => {
            cb()
            throw err;  // throw so that next catch can use that err 
        })
    } // p.then().finally().then() => finally won't take the result from prev then but just pass it on to the next .then



}