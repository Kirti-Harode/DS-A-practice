//Promise.all example:

function job(delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
});

// As you can see, Promise.all returns a promise. The received data is an array containing the data of each given promise. 
// The promise is resvoled when all given promises are resolved.

// Beware, Promise.all has a fail-fast behaviour. If a given promise is rejected, the resulting promise of 
// Promise.all will be rejected at this exact moment. It will not wait for the other promises to complete, 
// and the only received data is the error of the rejected request. See the following example for a better understanding.

let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

.then(function(data) {
    data.forEach(function(data) {
        cconsole.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});


// What if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected? Just use catch. See the following example.

// In this example, we don't give the promises directly to Promise.all. We give the result of p.catch (this is an auto-resolved promise) so Promise.all won't stop. In this case, however, you have to test the received data yourself to check for errors.
let q1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let q2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let q3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let q4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let q5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([q1.catch(function() {}), q2.catch(function() {}), q3.catch(function() {}), q4.catch(function() {}), q5.catch(function() {})]);

promise

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});




//Promise.race() =>
// Promise.race takes an array of promises. The result is a new promise that resolves or rejects as soon as one of the promises in the given array resolves or rejects.
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time, 'success ' + time);
    });
}

Promise.race([delay(500), delay(100)]).then(function(data) {
    console.log(data);
});