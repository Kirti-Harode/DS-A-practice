//1.  Create a Promise and resolve it immediately.
// Running the following will create a Promise that resolves it immediately.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved');
//     }, 1000);
// });

// promise.then(res => console.log(res));
// Note: setTimeout simulates a long running asynchronous process such as calling a backend service.


// 2. Create a function that returns a Promise and resolve when calling the function.

// const getPromise = function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('res');
//         }, 1000)
//     })
// }
// promise is triggered to resolve here, when calling the function
// getPromise().then((res) => {
//     console.log(res);
// })


// How to consume a Promise?
// After a Promise is created, it can be consumed. There are three main ways to consume a Promise: then(), catch(), finally().

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('res from promise1')
//     }, 1000)
// })

// promise1.then(res => console.log(res), err => console.log("from err: " + err)) //can handle resolve and reject
// .catch(err => console.log("from catch: " + err))
// .finally(() => console.log("finally done"))


// let newPromise = new Promise((res, rej) => console.log(res("hello")));
// console.log(newPromise)


class MyPromise{
    constructor(callback){
        this.state = "pending";
        this.value = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = val => {
            if(this.state === 'pending'){
                this.state =  'fulfilled';
                this.value = val;
                this.onFulfilledCallbacks.forEach(fn => fn(val));
            }
        }
        const reject = val => {
            if(this.state === 'pending'){
                this.state =  'rejected';
                this.value = val;
                this.onRejectedCallbacks.forEach(fn => fn(val));
            }
        }
    
        try{
            callback(resolve, reject);
        }catch(err){
            reject(err);
        }
    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {

            if(this.state === 'pending'){
                this.onFulfilledCallbacks.push(() => {
                    try{
                        const fulfilledFromLastPromise = onFulfilled(this.value);
                        resolve(fulfilledFromLastPromise);
                    }catch(err){
                        reject(err);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try{
                        const rejectedFromLastPromise = onRejected(this.value);
                        resolve(rejectedFromLastPromise);
                    }catch(err){
                        reject(err);
                    }
                });
            }

            if(this.state === "fulfilled"){
                try{
                    const fulfilledFromLastPromise = onFulfilled(this.value);
                    resolve(fulfilledFromLastPromise);
                }catch(err){
                    reject(err);
                }
            }
            
            if(this.state === 'rejected'){
                try{
                    const rejectedFromLastPromise = onRejected(this.value);
                    resolve(rejectedFromLastPromise);
                }catch(err){
                    reject(err);
                }
            }
        })

    }

}


//testing:
const p1 = new MyPromise((res, rej) => {
    setTimeout(() => res("resolved"), 1000);
});

const p2 = new MyPromise((res, rej) => {
    rej("rejected");
});

p1.then(res => {
    console.log("p1 then: " + res);
}, err => {
    console.log( "p1 catch: " + err);
})

p2.then(res => {
    console.log("p2 then: " + res);
}, err => {
    console.log("p2 catch: " + err);
})