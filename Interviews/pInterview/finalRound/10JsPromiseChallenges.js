// Challenge 1: Promise Construtor

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

//output :
    //"start"
    //1
    //"end"
    
//Analysis :
// Synchronized code blocks are always executed sequentially from top to bottom.
// When we call new Promise(callback), the callback function will be executed immediately.



//Challenge 2: .then()

// console.log('start');

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise2.then(res => {
//   console.log(res)
// })

// console.log('end');

//output :
    //start
    // 1
    // end
    // 2


// Analysis:
// In this code snippet, a piece of asynchronous code appears. That is, the callback function in .then().
// Remember, the JavaScript engine always executes synchronous code first, then asynchronous code.
// When encountering this problem, we only need to distinguish between synchronous code and asynchronous code.


// Challenge 3: resolve()

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

//output:
    // start
    // 1
    // 3
    // end
    // 2

// Analysis:
// This code is almost the same as the previous code; the only difference is that there is a console.log(3) after resolve(2).
// Remember, the resolve method does not interrupt the execution of the function. The code behind it will still continue to execute.


// Challenge 4: resolve() isn’t called
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');
//output: 
    // start
    // 1
    // end
// Analysis:
// In this code, the resolve method has never been called, so promise1 is always in the pending state. 
// So promise1.then(…) has never been executed. 2 is not printed out in the console.


// Challenge 5: The One That’s There to Confuse You
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => { //fn is called/invoked here only
//   console.log(res)
// })

// console.log('end')

//output:
    // start
    // middle
    // 1
    // end
    // success

// Analysis:
//     This code deliberately adds a function to confuse challengers, and that is fn.
    
//     But please remember that no matter how many layers of function calls there are, our basic principles remain the same:
    
//     Execute synchronous code first, then asynchronous code
//     Synchronous code is executed in the order in which it was called



// Challenge 6: The One With a Fulfilling Promise
// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

//output: 
    // start
    // end
    // 1
    // 2

 // Analysis
    // Here Promise.resolve(1) will return a Promise object whose state is fulfilled and the result is 1 . It is synchronous code.

    
// Challenge 7: setTimeout vs Promise

// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')

//output :
    // start
    // end
    // resolve
    // setTimeout

// Analysis:

// This is a very difficult question. If you can answer this question correctly and explain the reason, then your understanding of asynchronous programming in JavaScript has reached an intermediate level.
// Before explaining this question, let us discuss the relevant theoretical basis.

// We said before that the synchronous code is executed in the order of calling, so in what order are these asynchronous callback functions executed?
// Some might say that whoever finishes first will execute first. Well, that’s true, but what if two async tasks complete at the same time?
// For example, in the above code, the timer of setTimeout is 0 second, and Promise.resolve() will also return a fulfilled Promise object immediately after execution.
// Both asynchronous tasks are completed immediately, so whose callback function will be executed first?
// Some juniors may say that setTimeout is in front, so print setTimeout first, and then print resolve. Actually, this statement is wrong.
// We know that many things are NOT performed in a first-in, first-out order, such as traffic.
// Priority
// We generally divide vehicles into two categories:
// 1) General vehicles
// 2) Vehicles for emergency missions. Such as fire trucks and ambulances.
// When passing through crowded intersections, we will allow fire trucks and ambulances to pass first. Emergency vehicles have more priorities than other vehicles. Keywords: priorities.

// In JavaScript EventLoop, there is also the concept of priority.

// Tasks with higher priority are called microtasks. Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
// Tasks with lower priority are called macrotasks. Includes: setTimeout , setInterval and XHR.


// Challenge 8: Microtasks mix Macrotasks


// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
  
//   promise.then((res) => {
//     console.log(res);
//   });
  
//   console.log(4);

//output:
    // 1
    // 2
    // 4
    // timerStart
    // timerEnd
    // success

// Analysis
//This challenge is easy to complete if you already understand the previous code challenge.
//We just need to do three steps:
//     Find the synchronization code.
//     Find the microtask code
//     Find the macrotask code

//First, execute the synchronization code:   
//Then execute microtask:
// But here is a trap: Since the current promise is still in the pending state, the code in this will not be executed at present.
// Then execute macrotask:
// And the state of the promise becoming to fulfilled.
// Then, with Event Loop, execute the microtask again:


// Challenge 9: Prioritise Between Microtasks and Macrotasks
// const timer1 = setTimeout(() => {
//     console.log('timer1');
    
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//     })
//   }, 0)
  
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)

//output:
    // timer1
    // promise1
    // timer2

//Analysis:
// The correct understanding is:

// Execute all microtasks first
// Execute one macrotask
// Execute all (newly added) microtasks again
// Execute next macrotask
// Cycle through

// So in the above code, the callback function of Promise.then will be executed before the callback function of the second setTimeout, because it is a microtask and has been cut in line.


// Challenge 10: A Typical Interview Question
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');

//output:
    // start
    // end
    // promise1
    // timer1
    // promise2
    // timer2


//Analysis:
// Execute all sync code: start, end
// Execute all microtasks : promise1
// Execute the first macro task: timer1
// Execute all newly added microtasks: promise2
// Execute the next macro task: timer2


// Conclusion
// For all similar questions, you just need to remember three rules:

// The JavaScript engine always executes synchronous code first, then asynchronous code.
// Microtasks have a higher priority than macrotasks.