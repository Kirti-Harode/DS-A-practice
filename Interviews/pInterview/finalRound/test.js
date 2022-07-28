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

document.getElementById("btn").addEventListener("click", callback);