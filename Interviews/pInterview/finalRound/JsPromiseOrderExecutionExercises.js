//1. microtask:

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//   });
//   promise1.then(() => {
//     console.log(3);
//   });
//   console.log(4);

//output:
    // 1
    // 4
    // 3


//2.
// const promise2 = new Promise((resolve, reject) => {
//     console.log(1);
//   });
//   promise2.then(() => {
//     console.log(3);
//   });
//   console.log(4);

//output:
    // 1
    // 4
    // 3


//3. 

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve('resolve1')
//   })
//   const promise2 = promise1.then(res => {
//     console.log(res)
//   })
//   console.log('promise1:', promise1);
//   console.log('promise2:', promise2);

// 1
// promise1: Promise { 'resolve1' }
// promise2: Promise { <pending> }
// resolve1

//4.
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1)
//     resolve('success')
//   }));
//   fn().then(res => {
//     console.log(res)
//   });
//   console.log(2)
// 1
// 2
// success



//5.
// console.log('start')
// setTimeout(() => {
//   console.log('setTimeout')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')

// start
// end
// resolve
// setTimeout

//6.
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


// 1
// 2
// 4
// timerStart
// timerEnd
// success


//7.
// const timer1 = setTimeout(() => {
//     console.log('timer1');
//     const timer3 = setTimeout(() => { 
//        console.log('timer3')
//     }, 0)
// }, 0)

// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0)

// console.log('start')

// start
// timer1
// timer2
// timer3


//8.
// const timer1 = setTimeout(() => {
//     console.log('timer1');
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//     })
// }, 0)

// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0)

// console.log('start')

// start
// timer1
// promise1
// timer2


//9.
// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//       console.log('timer2')
//     }, 0)
// });
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise2 = Promise.resolve().then(() => {
//       console.log('promise2')
//     })
// }, 0)
// console.log('start');


//start
// promise1
// timer1
// promise2
// timer2


//10.
const promise1 = new Promise((resolve, reject) => {
    const timer1 = setTimeout(() => {
      resolve('success')
    }, 1000)
})
const promise2 = promise1.then(() => {
    throw new Error('error!!!')
})
  
console.log('promise1', promise1)
console.log('promise2', promise2)
  
const timer2 = setTimeout(() => {
    console.log('promise1', promise1);
    console.log('promise2', promise2);
}, 2000)