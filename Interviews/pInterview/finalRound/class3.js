const STATE = {
    FULFILLED: 'fulfilled',
    PENDING : 'pending',
    REJECTED : 'rejected'
}
class MyPromise{
    constructor(callback){
        this.state = STATE.PENDING;
        this.value = undefined;
        this.catchCbs = [];
        this.thenCbs = [];

        try{
            callback(this.onSuccess, this.onFail)
        }catch(err){
            this.onFail(err);
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
        this.runCallbacks = this.runCallbacks.bind(this);
    }

    runCallbacks(){
        if(this.state === STATE.FULFILLED){
            this.thenCbs.forEach(cb => {
                cb(this.value);
            });

            this.thenCbs = [];
        }
       
        if(this.state === STATE.REJECTED){
            this.catchCbs.forEach(cb => {
                cb(this.value);
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

            this.state = STATE.REJECTED;
            this.value = value;
            this.runCallbacks();
        })

    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
           
            this.thenCbs.push(res => {
                if(onFulfilled === null){
                    resolve(res);
                    return;
                }

                try{
                    resolve(onFulfilled(res));
                }catch(err){
                    reject(err)
                }
                
            })

            this.catchCbs.push(res => {
                if(onRejected === null){
                    reject(res);
                    return;
                }

                try{
                    resolve(onRejected(res));
                }catch(err){
                    reject(err)
                }
                
            })
        });
    }

    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    finally(cb){

    }

    

}