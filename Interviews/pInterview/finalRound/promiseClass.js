const STATE = {
    FULFILLED : 'FULFILLED',
    PENDING: 'PENDING',
    REJECTED:'REJECTED'
  }
  
  class MyPromise{
    constructor(cb){
       try{
            cb(this.onSuccess, this.onFail)
       } catch(e){
            this.onFail(e)
       }
       this.thenCbs = [];
       this.catchCbs = [];
       this.state = STATE.PENDING;
       this.value;
  
  
       this.onSuccess = this.onSuccess.bind(this);
       this.onFail = this.onFail.bind(this);
       this.runCallbacks = this.runCallbacks.bind(this)
  
    }
  
    runCallbacks(){
        if(this.state === STATE.FULFILLED){
            this.thenCbs.forEach(callback => {
                callback(this.value);
            });
  
            this.thenCbs = [];
        }
        if(this.state === STATE.REJECTED){
            this.catchCbs.forEach(callback => {
                callback(this.value);
            });
            this.catchCbs = [];
        }
    }
  
    onSuccess(value){
      queueMicrotask(() => {
        if(this.state !== STATE.PENDING) return;
  
        if(value instanceof MyPromise){
          value.then(this.onSuccess, this.onFail);
          return;
        }
        this.value = value;
        this.state = STATE.FULFILLED;
        this.runCallbacks();
      });
  
    }
  
    onFail(value){
      queueMicrotask(() => {
        if(this.state !== STATE.PENDING) return;
        if(value instanceof MyPromise){
          value.then(this.onSuccess, this.onFail);
          return;
        }
  
        if(this.catchCbs.length === 0){
          throw new UncaughtPromiseError(value);
        }
  
        this.value = value;
        this.state = STATE.REJECTED;
        this.runCallbacks();
      });
  
    }
  
    then(thenCb, catchCb){
      return new MyPromise((resolve, reject) => {
        this.thenCbs.push(result => {
          if(thenCb === null){
            resolve(result);
            return;
          }
  
          try{
            resolve(thenCb(result))
          } catch(err){
            reject(err)
          }
        });
  
        this.catchCbs.push(result => {
          if(catchCb === null){
            reject(result);
            return;
          }
  
          try{
            resolve(catchCb(result))
          } catch(err){
            reject(err)
          }
        });
    
        this.runCallbacks();
      })
    
    }
  
    catch(cb){
      return this.then(undefined, cb)
  
    }
  
    finally(cb){
      return this.then(result => {
        cb();
        return result;
      }, result => {
        cb();
        throw result;
      })
    }
  
    // Static methods: 
  
    static resolve(value){
      return new MyPromise(resolve => {
        resolve(value);
      });
    }
  
    static reject(value){
      return new MyPromise((resolve, reject) => {
        reject(value);
      });
    }
  
    static all(promises){
      const result = [];
      let completedPromises = 0;
      return new MyPromise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++){
          const promise = promises[i];
          promise.then(value => {
            completedPromises++;
            result[i] = value;
            if(completedPromises === promises.length){
              resolve(result)
            }
          }).catch(reject)
        }
      })
    }
  
  
    static allSettled(promises){
      const result = [];
      let completedPromises = 0;
      return new MyPromise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++){
          const promise = promises[i];
          promise.then(value => {
            result[i] = {status: STATE.FULFILLED, value}
           
          })
          .catch(reason => {
            result[i] = {status: STATE.REJECTED, reason}
          })
          .finally(() => {
            completedPromises ++;
            if(completedPromises === promises.length){
              resolve(result);
            }
          })
        }
      })
    }
  
  
    static race(promises){
      return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
          promise.then(resolve).catch(reject);
        })
      })
    }
  
  
    static any(promises){
      const errors = [];
      let rejectedPromises = 0;
      return new MyPromise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++){
          const promise = promises[i];
          promise.then(resolve).catch(value => {
            rejectedPromises++;
            errors[i] = value;
            if(rejectedPromises === promises.length){
              resolve(new AggregateError(errors, "All promises were rejected"))
            }
          })
        }
      })
    }
  
  }
  
  
  
  class UncaughtPromiseError extends Error {
    constructor(error){
      super(error);
      this.stack = `(in promise) ${error.stack}`;
  
    }
  
  }
  
  