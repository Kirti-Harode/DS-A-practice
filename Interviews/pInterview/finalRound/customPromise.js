const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}
class MyPromise{
    constructor(callback){
        this.state = STATE.PENDING;
        this.value = undefined;
        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
        this.runCallback = this.runCallback.bind(this);

        this.thenCbs = [];
        this.catchCbs = [];

        try{
            callback(this.onSuccess, this.onFail)
        }catch(err){
            this.onFail(err);
        }
    }

    runCallback(){
        if(this.state === STATE.FULFILLED){
            this.thenCbs.forEach((callback) => {
                callback(this.value);
            })
            this.thenCbs = [];
        }

        if(this.state === STATE.REJECTED){
            this.catchCbs.forEach((callback) => {
                callback(this.value);
            })
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
            this.state = STATE.FULFILLED;
            this.value = value;

            this.runCallback();
        })
        
    }

    onFail(value){
        queueMicrotask(() => {
            if(this.state !== STATE.PENDING) return;

            if(value instanceof MyPromise){
                value.then(this.onSuccess, this.onFail);
                return;
            }

            if(this.catchCbs.length === 0){
                console.error("error" + value);
            }
            this.state = STATE.REJECTED;
            this.value = value;
            this.runCallback();

        })
    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
            this.thenCbs.push(res => {
                if(onFulfilled == null){
                    resolve(res)
                    return;
                }
                try{
                   resolve( onFulfilled(res));
                }catch(err){
                    reject(err)
                }
            })

            this.catchCbs.push(res => {
                if(onRejected == null){
                    reject(res)
                    return;
                }

                try{
                   resolve( onRejected(res));
                }catch(err){
                    reject(err)
                }
            })
            this.runCallback();
        })
    }

    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    finally(onFinally){
        return this.then(
            (res) => {
                onFinally();
                return res;
            },
            (err) => {
                onFinally();
                throw err;
            }
        )
    }

    static resolve(value){
        return new MyPromise((resolve, reject) =>{
            resolve(value);
        })
    }

    static reject(value){
        return new MyPromise((resolve, reject) =>{
            reject(value);
        })
    }

    static all(promises){
        let results = [];
        let completedPromises = 0;
        return new MyPromise((resolve, reject) => {
            if(promises.length === 0) resolve(results);

            promises.forEach((promise, index) => {
                MyPromise.resolve(promise)
                    .then(res => {
                        results[index] = res;
                        completedPromises ++;
                        if(completedPromises === promises.length){
                            resolve(results);
                        }
                    })
                    .catch(err => {reject(err)})
            })
        })
    }
}

let p = new Promise((resolve, reject) => { console.log("res"); resolve() }).then((res) => {}, rej => {})