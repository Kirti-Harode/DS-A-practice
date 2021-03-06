// setTimeout() : 

// setTimeout(fun, duration, param1, param2, ...)


function greet(name, last){
    console.log(`Hello ${name} ${last}`);
}

// let timeoutId = setTimeout(greet, 2000, 'Chotu', 'Motu');

// clearTimeout(timeoutId); // stop execution of settimeout fun
// used to clear timeouts when unmounting components, prevents code from incorrectly executing on an unmounting component.



//setInterval():

let timeoutId = setInterval(greet, 2000, "Chotu", "Motu");
clearInterval(timeoutId);

//set interval using recursive setTimeout fun
//it is guaranted that this will exedute exactly after 100 ms, but not true with normal setInterval
//can calculate diff delay before running each iteration
// setTimeout(function run() {
//     console.log('Hello');
//     setTimeout(run, 100)
// }, 100);



//Callbacks:

// setTimeout and setInterval were the async callbacks
//event handlers are also async callbacks:
function callback(){
    document.getElementById("demo").innerHTML = "Hello World";
}

// document.getElementById("btn").addEventListener("click", callback);



//Async Await: 

// async function greet(){
//     return "Hello";
// }
// greet();

// OR: 

async function greet(){
    return Promise.resolve("Hello")
}
// greet().then(val => console.log(val));


async function greet(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 1000)
    });

    let result = await promise;
    console.log(result);
}

// greet();



// Sequential Execution
// time taken : 3 seconds
function resolveHello(){
    return new Promise(resolve => {
        setTimeout(function (){
            resolve('Hello')
        }, 2000)
    })
}

function resolveWorld(){
    return new Promise(resolve => {
        setTimeout(function (){
            resolve("World");
        }, 1000)
    })
}

async function sequentialStart(){
    const hello = await resolveHello();
    console.log(hello);

    const world = await resolveWorld();
    console.log(world);
}

// sequentialStart();

//Concurrent Execution : 
// time taken : 2 seconds 
async function concurrentStart(){
    const hello = resolveHello();
    const world = resolveWorld();

    console.log(await hello);
    console.log(await world);

}

// concurrentStart();


//Parallel Eexcution : 
//time taken: 2 seconds
function parallel(){
    Promise.all([
        (async() => console.log(await resolveHello()))(),
        (async() => console.log(await resolveWorld()))(),
    ])
}
// parallel();


//time taken: 2 seconds
async function parallel(){
    await Promise.all([
        (async() => console.log(await resolveHello()))(),
        (async() => console.log(await resolveWorld()))(),
    ])
    console.log('Finally');
}
parallel();