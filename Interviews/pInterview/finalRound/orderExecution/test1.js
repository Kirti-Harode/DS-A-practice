// What is the order of execution in JavaScript promises?

Promise.resolve('A').then(function (a) {
        console.log(2, a);
        return 'B';
    }).then(function (a) {
        Promise.resolve('C').then(function (a) {
            console.log(7, a);
        }).then(function (a) {
            console.log(8, a);
        });
        console.log(3, a);
        return a;
    }).then(function (a) {
        Promise.resolve('D').then(function (a) {
            console.log(9, a);
        }).then(function (a) {
            console.log(10, a);
        });
        console.log(4, a);
    }).then(function (a) {
        console.log(5, a);
    });
       
    console.log(1);
        
    setTimeout(function () {
        console.log(6)
    }, 0);

//output:
    // 1
    // 2 "A"
    // 3 "B"
    // 7 "C"
    // 4 "B"
    // 8 undefined
    // 9 "D"
    // 5 undefined
    // 10 undefined
    // 6

//running promises inside of a .then() handler and NOT returning those promises from the .then() callback creates a completely 
// new unattached promise sequence that is not synchronized with the parent promises in any way.
// all your Promise.resolve() promises inside of .then() handlers create new Promise chains that run independently of the parent chain. With actual asynchronous operations, you do not have a determinate behavior with non-connected, independent promise chains. 
// It's kind of like launching four ajax calls in parallel. You don't know which one will complete first.

// 1.
// Line 1 starts a promise chain and attached a .then() handler to it. Since Promise.resolve() resolves immediately, the Promise library will schedule the first .then()
//  handler to run after this thread of Javascript finishes. In Promises/A+ compatible promise libraries, all .then() handlers are called asynchronously after the current 
//  thread of execution finishes and when JS goes back to the event loop. This means that any other synchronous code in this thread such as your console.log(1) will run next
//   which is what you see.

// 2.
// All the other .then() handlers at the top level (lines 4, 12, 19) chain after the first one and will run only after the first one gets its turn. They are essentially queued at this point.
// Since the setTimeout() is also in this initial thread of execution, it is run and thus a timer is scheduled.
// That is the end of the synchronous execution. Now, the JS engine starts running things that are scheduled in the event queue.

//3.
// As far as I know, there is no guarantee which comes first a setTimeout(fn, 0) or a .then() handler that are both scheduled to run right after this thread of execution.
//  .then() handlers are considered "micro-tasks" so it does not surprise me that they run first before the setTimeout(). But, if you need a particular order, 
//  then you should write code that guarantees an order rather than rely on this implementation detail.

// Anyway, the .then() handler defined on line 1 runs next. Thus you see the output 2 "A" from that console.log(2, a).

// Next, since the previous .then() handler returned a plain value, that promise is considered resolved so the .then() handler defined on line 4 runs. 
// Here's where you're creating another independent promise chain and introducing a behavior that is usually a bug.

//4.
// Line 5, creates a new Promise chain. It resolves that initial promise and then schedules two .then() handlers to run when the current thread of execution is done. 
// In that current thread of execution is the console.log(3, a) on line 10 so that's why you see that next. Then, this thread of execution finishes and it goes back to the scheduler to see what to run next.

// We now have several .then() handlers in the queue waiting to run next. There's the one we just scheduled on line 5 and there's the next one in the higher level chain on line 12. If you had done this on line 5:

//5.
// then you would have linked these promises together and they would be coordinated in sequence. But, by not returning the promise value, you started a whole new promise chain that is not coordinated with the outer, higher level promise.
//  In your particular case, the promise scheduler decides to run the more deeply nested .then() handler next. I don't honestly know if this is by specification, by convention or just an implementation detail of one promise engine vs. the other. 
//  I'd say that if the order is critical to you, then you should force an order by linking promises in a specific order rather than rely on who wins the race to run first.

// Anyway, in your case, it's a scheduling race and the engine you are running decides to run the inner .then() handler that's defined on line 5 next and thus you see the 7 "C" specified on line 6. It then returns nothing so the resolved value of this promise becomes undefined.

//6.
// Back in the scheduler, it runs the .then() handler on line 12. This is again a race between that .then() handler and the one on line 7 which is also waiting to run. I don't know why it picks one over the other here other than to say it may be indeterminate or 
// vary per promise engine because the order is not specified by the code. In any case, the .then() handler in line 12 starts to run. That again creates 
// a new independent or unsynchronized promise chain line the previous one. It schedules a .then() handler again and then you get the 4 "B" from the synchronous code 
// in that .then() handler. All synchronous code is done in that handler so now, it goes back to the scheduler for the next task.

// Back in the scheduler, it decides to run the .then() handler on line 7 and you get 8 undefined. The promise there is undefined because the previous 
// .then() handler in that chain did not return anything, thus its return value was undefined, thus that is the resolved value of the promise chain at that point.


//7.
// Again, all synchronous code is done so it goes back to the scheduler again and it decides to run the .then() handler defined on line 13. That runs and you get the output 9 "D" and then it goes back to the scheduler again.

// Consistent with the previously nested Promise.resolve() chain, the the schedule chooses to run the next outer .then() handler defined on line 19. It runs and you get the output 5 undefined. It is again undefined because the previous .then() handler in that chain did not return a value,
//  thus the resolved value of the promise was undefined.

//8.
// At this point, there is only one .then() handler scheduled to be run so it runs the one defined on line 15 and you get the output 10 undefined next.
// Then, lastly, the setTimeout() gets to run and the final output is:


// You could make the order 100% determinate by just linking all your promise chains like this (returning inner promises so they are linked into the parent chain):

Promise.resolve('A').then(function (a) {
    console.log(2, a);
    return 'B';
}).then(function (a) {
    var p =  Promise.resolve('C').then(function (a) {
        console.log(7, a);
    }).then(function (a) {
        console.log(8, a);
    });
    console.log(3, a);
    // return this promise to chain to the parent promise
    return p;
}).then(function (a) {
    var p = Promise.resolve('D').then(function (a) {
        console.log(9, a);
    }).then(function (a) {
        console.log(10, a);
    });
    console.log(4, a);
    // return this promise to chain to the parent promise
    return p;
}).then(function (a) {
    console.log(5, a);
});

console.log(1);

setTimeout(function () {
    console.log(6)
}, 0);

// This gives the following output in Chrome:

// 1
// 2 "A"
// 3 "B"
// 7 "C"
// 8 undefined
// 4 undefined
// 9 "D"
// 10 undefined
// 5 undefined
// 6

