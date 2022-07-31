class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.thenCbs = [];
      this.catchCbs = [];
  
      this._reject = this._reject.bind(this);
      this._resolve = this._resolve.bind(this);
      this.runCallbacks = this.runCallbacks.bind(this);
  
      try{
        executor(this._resolve, this._reject)
      }catch(err){
        this._reject(err)
      }
    }
    
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        this.thenCbs.push(result => {
          if(onFulfilled === null){
            resolve(result);
            return;
          }
  
          try{
            resolve(onFulfilled(result))
          }catch(err){
            reject(err);
          }
        });
  
        this.catchCbs.push(result => {
          if(onRejected === null){
            reject(result);
            return;
          }
  
          try{
            resolve(onRejected(result))
          }catch(err){
            reject(err);
          }
        });
        this.runCallbacks();
      })
    }
    
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
    
    _resolve(value) {
      if(this.state !== 'pending') return;
  
      if(value instanceof MyPromise){
        value.then(this._resolve, this._reject)
        return;
      }
      this.value = value;
      this.state = 'fulfilled';
      this.runCallbacks();
    }
  
    _reject(value){
      if(this.state !== 'pending') return;
  
      // if(value instanceof MyPromise){
      //   value.then(this.resolve, this.reject)
      //   return;
      // }
      this.value = value;
      this.state = 'rejected';
      this.runCallbacks();
    }
  
    runCallbacks(){
      if(this.state === 'fulfilled'){
        this.thenCbs.forEach(callback => {
          callback(this.value);
        });
        this.thenCbs = [];
      }
  
      if(this.state === 'rejected'){
        this.catchCbs.forEach(callback => {
          callback(this.value);
        });
        this.catchCbs = [];
      }
    }
  
    static resolve(value) {
      return new MyPromise((resolve, reject) => {
       resolve(value);
      })
  
    }
    
    static reject(value) {
     return new MyPromise((resolve, reject) => {
       resolve(value);
      })
    }
  }






  const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
  }
  
  class MyPromise {
    thenCbs = []
    catchCbs = []
    state = STATE.PENDING
    value
    onSuccessBind = this.onSuccess.bind(this)
    onFailBind = this.onFail.bind(this)
  
    constructor(executor) {
      try {
        executor(this.onSuccessBind, this.onFailBind)
      } catch (e) {
        this.onFail(e)
      }
    }
  
    runCallbacks() {
      if (this.state === STATE.FULFILLED) {
        this.thenCbs.forEach(callback => {
          callback(this.value)
        })
  
        this.thenCbs = []
      }
  
      if (this.state === STATE.REJECTED) {
        this.catchCbs.forEach(callback => {
          callback(this.value)
        })
  
        this.catchCbs = []
      }
    }
  
    onSuccess(value) {
      queueMicrotask(() => {
        if (this.state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.onSuccessBind, this.onFailBind)
          return
        }
  
        this.value = value
        this.state = STATE.FULFILLED
        this.runCallbacks()
      })
    }
  
    onFail(value) {
      queueMicrotask(() => {
        if (this.state !== STATE.PENDING) return
  
        if (value instanceof MyPromise) {
          value.then(this.onSuccessBind, this.onFailBind)
          return
        }
  
        if (this.catchCbs.length === 0) {
          console.error('error' + value)
        }
  
        this.value = value
        this.state = STATE.REJECTED
        this.runCallbacks()
      })
    }
  
    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        this.thenCbs.push(result => {
          if (thenCb == null) {
            resolve(result)
            return
          }
  
          try {
            resolve(thenCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.catchCbs.push(result => {
          if (catchCb == null) {
            reject(result)
            return
          }
  
          try {
            resolve(catchCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.runCallbacks()
      })
    }
  
    catch(cb) {
      return this.then(undefined, cb)
    }
  
    static resolve(value) {
      return new Promise(resolve => {
        resolve(value)
      })
    }
  
    static reject(value) {
      return new Promise((resolve, reject) => {
        reject(value)
      })
    }
  }