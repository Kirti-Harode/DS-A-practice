const STATE ={
    FULFILLED: 'fulfilled',
    PENDING: 'pending',
    REJECTED: 'rejected'
}
// prmises resolve and rejects immideately but they are async
// Note: A promise is executed as soon as it is created, that means our promise callback function will be called 
// inside the constructor with reject and resolve methods passed as parameters to it.
class MyPromise{
    constructor(callabck){  //promise has a cb fun, cb => use it to call the resolve or reject right away

        this.thenCbs = [];
        this.catchCbs = [];
        this.state = STATE.PENDING;
        this.value = undefined;

        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
        this.runCallbacks = this.runCallbacks.bind(this);

        //calls the cb fun right away
        try{   // wrapping it in try catch so if the promise has an err goes to catch and just call reject
            callabck(this.onSuccess, this.onFail);
        }catch(err){
            this.onFail(err);
        }  

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

            if(value instanceof MyPromise){ // if then or resolve is returing a promise instead of val 
                value.then(this.onSuccess, this.onFail); // wait for that promise to resolve/reject and after that use .then. then call succ and rej on the res
                return;    //to call onsuccess and onfail and just return
            }
            this.value = value;
            this.state = STATE.FULFILLED;
            // execute handlers if already attached
            this.runCallbacks();
        })
        
    }

    onFail(value){
        queueMicrotask(() => { 
        if(this.state !== STATE.PENDING) return; // should just call reject once same for resolve

        if(value instanceof MyPromise){ 
            value.then(this.onSuccess, this.onFail);
            return; 
        }

        if(this.catchCbs.length === 0){ // if there is an err but no catch blog that means the err cb not in this.catchCbs so just give a big error and warning
            console.error('error' + value);
        }
        this.value = value;
        this.state = STATE.REJECTED;
        // execute handlers if already attached
        this.runCallbacks();
    })

    }

    //.then takes two cbs and store them in thencbs and catchcbs
    then(onFulfilled, onRejected){ //.then is called after the onsuccess/onfail
        return new MyPromise((resolve, reject) => { // promise for chaining
            this.thenCbs.push(res => {   // res is resolve("res"), "res" variable
                if(onFulfilled == null){ // if onFull is not ther taht meanins it is a catch, which doesnot care about resolve, so just return from there to attach next then
                    resolve(res);  // p.then().catch().then() => catch doesn;t care about the succ so just resolve it. move on to the next rpomise with the res
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
                if(onRejected == null){
                    reject(res);
                    return;
                }

                try{
                    resolve(onRejected(res)) // if onReject return successfully then resolve
                }catch(err){
                    reject(err)
                }
             })
        this.runCallbacks();
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


    static resolve(value){ // value can be a promise or a val
        return new MyPromise((resolve, reject)=> { // it will return a promise immediately resolved
          resolve(value);
        });
    }
    
    static reject(value){
        return new MyPromise((resolve, reject)=> {
          reject(value);
        });
    }
    
    static all(promises){
        let results = [];
        let completedPromises = 0;
    
        return new MyPromise((resolve, reject) => {
          promises.forEach((promise, index) => {
           promise
            .then(value => {
              completedPromises++
              results[index] = value
              if (completedPromises === promises.length) {
                resolve(results)
              }
            })
            .catch(err => (reject(err)))
          })
        })
      }
     
    
      static allSettled(promises){
        let results = [];
        let completedPromises = 0;
        return new MyPromise((resolve, reject) => { // always going to be resolved
          promises.forEach((promise, index) => {
            promise.then(value => {
              results[index] = {status: STATE.FULFILLED, value};  // res in this form to know which one se resolved which on is rejected
            })
            .catch(reason => {
              results[index] = {status: STATE.REJECTED, reason}
            })
            .finally(() => {
              completedPromises ++;
              if(completedPromises === promises.length){
                resolve(results);
              }
            })
           
          })
        })
      }
    
    static race(promises){
        return new MyPromise((resolve, reject) => {
          promises.forEach((promise) =>{
            promise.then(res => resolve(res)).catch(err => reject(err));
          })
        })
    }
    
    static any(promises){
        let errors = [];
        let completed = 0;
        return new MyPromise((resolve, reject) => {
          promises.forEach((promise, index) => {
            promise
            .then(resolve)
            .catch(err => {
              errors[index] = err;
              completed ++;
              if(completed === promises.length){
                reject(errors);
              }
            })
          })
        })
  }
}