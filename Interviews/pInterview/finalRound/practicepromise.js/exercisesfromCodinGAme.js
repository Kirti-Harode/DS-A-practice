//1.
// Let's do some practice with a simple exercice. You must modify the code below based on the following rules:

// The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data

function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('hello world')
        }, 2000)
    })
}

//2.
// Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function job(data) {
    return new Promise((resolve, reject) => {
        if(isNaN(data)){
            reject("error");
        }
        if(data % 2 === 0){
            setTimeout(() => {
                reject("even")
            }, 2000)
        }else {
            setTimeout(() =>{
                resolve("odd");
            }, 1000)
        }
    })
}

//3. chaining : 
var promise = job1();

promise
    .then(function(data1) {
        console.log('data1', data1);
        return job2();
    })

    .then(function(data2) {
        console.log('data2', data2);
        return 'Hello world';
    })

    .then(function(data3) {
        console.log('data3', data3);
    });

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}


//4. differece in using .then().catch() vs then(onSuccess, onFailure):

// Example 1
let promise = request();

promise.then(function(data) {
    console.log(data);
}, function(error) {
    console.error(error);
});


// Example 2
let promise = request();

promise

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.error(data);
});

// To understand how to use then and catch directly, you can think of it as pretty similar to using try { ... } catch { ... }. 
// Let's take the 2 examples and express them in "pseudo-synchronous code"

// Example 1
try {
    let promise = request();
} catch (error) {
    console.error(error);
    return;
}
console.log(data);

// Example 2
try {
    let promise = request();
    console.log(data);
} catch (error) {
    console.error(error);
}
// The difference is easy to understand when you express the code in "pseudo-synchronous code". 
// You can use the promise's catch like a normal catch and everything is simple to understand. 
// Keep in mind that a then callback can crash. It can throw an error (with an explicit throw or by trying to reach a property 
// of a null variable). The catch method will also catch these crashes. Repeat to yourself: the promise's catch method is like a normal catch.
