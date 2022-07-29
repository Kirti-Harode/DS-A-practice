// 1) How to create a Promise:

// const promise = new Promise();


//2) How to fullFill and reject the promise

// const promise = new Promise(() => {

// })

//Resolve Scenario : 
const promise1 = new Promise((resolve, reject) => {
    //Resolve Changes the status from 'pending' to 'fulfilled'

    setTimeout(() => {
        //food truck found.
        resolve("Bringing Tacos"); // resolve message access it in callback fun
    }, 5000)
 
});

const promise2 = new Promise((resolve, reject) => {

    //Reject changes the status from 'pending' to 'rejected'
    setTimeout(() => {
        //food truck found.
        reject("Not bringing tacos. Food truck not there"); // reject message access it in callback fun
    }, 5000) 
});


//callback functions for each scenario : 
const onFulfilled = (result) => {   // result is the resolve message
    console.log(result);
    console.log("Set up the table to eat tacos");
    console.log('--------------------------')
}

const onRejection = (error) => {  // error message
    console.log(error);
    console.log('Start cooking pasta');
}

promise1.then(onFulfilled); // Promise status: pending to fulfilled? then() is executed
promise2.catch(onRejection); // Promise status: pending to rejected? catch() is executed


// promise1.then(onFulfilled, onRejection) 
//this will also work but with is apporach if the callback fun itself throw some error it won't handle it, it will just handle the error from the promise.


