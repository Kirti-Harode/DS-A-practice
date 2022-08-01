
const STATE = {
    FULFILLED : 'fulfilled',
    PENDING : 'pending',
    REJECTED: 'rejected'
}


class MyPromise{
    constructor(executor){
        this.state = STATE.PENDING;
        this.value = undefined;
        this.thenCbs = [];
        this.catchCbs = [];
        try{
            executor(this.onSuccess, this.onFail)
        }catch(err){
            this.onFail(err);
        }

        this.runCallbacks =  this.runCallbacks.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
    }

    onSuccess(value){
        if(this.state !== STATE.PENDING) return ;

        if(value instanceof MyPromise){
            value.then(this.onSuccess, this.onFail);
            return ;
        }

        this.value = value;
        this.state = STATE.FULFILLED;
        this.runCallbacks();
    }

    onFail(value){
        if(this.state !== STATE.PENDING) return ;

        if(value instanceof MyPromise){
            value.then(this.onSuccess, this.onFail);
            return ;
        }

        if(this.catchCbs.length === 0){
            console.error('error' + value)
        }

        this.value = value;
        this.state = STATE.REJECTED;
        this.runCallbacks();
    }

    runCallbacks(){
        if(this.state === STATE.FULFILLED){
            this.thenCbs.forEach(cb => {
                cb(this.value);
            })
            this.thenCbs = [];
        }

        if(this.state === STATE.REJECTED){
            this.catchCbs.forEach(cb => {
                cb(this.value);
            })
            this.catchCbs = [];
        }
    }


    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
            this.thenCbs.push(result => {
                if(onFulfilled === null){
                    resolve(result);
                    return;
                }

                try{
                    resolve(onFulfilled(result))
                }catch(err){
                    reject(err)
                }
            })

            this.thenCbs.push(result => {
                if(onRejected === null){
                    resolve(result);
                    return;
                }

                try{
                    resolve(onRejected(result))
                }catch(err){
                    reject(err)
                }
            })
            this.runCallbacks();
        })
    }

    catch(cb){
        return this.then(undefined, cb);
    }

    finally(cb){
        return this.then(result => {
            cb();
            return result;
        }, err => {
            cb();
            throw err
        })
    }

    static resolve(value){
        return new Promise(resolve => {
            resolve(value);
        })
    }

    static reject(value){
        return new Promise((resolve, reject) => {
            reject(value);
        })
    }
}


let promise1 = MyPromise.resolve();
console.log(promise1)