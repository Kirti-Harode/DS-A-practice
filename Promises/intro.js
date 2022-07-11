//Basic promise =>
let p = new Promise((resolve, reject) => {
    let a = 1+1; //1+2;

    if(a === 2){
        resolve("This is a resolve message for .then, Success");
    }else{
        reject("This is a reject message for .catch, Rejected");
    }
});

p.then((message) => {
    console.log("This is in the then -> " + message);
}).catch((message) =>{
    console.log("This is in the catch -> " + message);
});


// Callbacks => 

let userLeft = false;
let userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: "User Left",
            message : ":("
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name: 'User Watching cat Meme',
            message : 'WebDevSimplified < Cat'
        })
    }else{
        callback('Thumbs up and Subscribe');
    }
}

watchTutorialCallback((message) => {
    console.log("Success: " + message)
}, (error) => {
    console.log(error.name + " " + error.message);
});


// Using Promise to avoid Callbacks => 

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: "User Left",
                message : ":("
            })
        }else if(userWatchingCatMeme){
            reject({
                name: 'User Watching cat Meme',
                message : 'WebDevSimplified < Cat'
            })
        }else{
            resolve('Thumbs up and Subscribe');
        }
    })
    
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + " " + error.message);
});



//All Promises together => 

let recordOneVideo = new Promise((resolve, reject) => {
    resolve("Video 1 recorded");
});

let recordTwoVideo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded");
});

let recordThreeVideo = new Promise((resolve, reject) => {
    resolve("Video 3 recorded");
});

Promise.all([
    recordOneVideo,
    recordTwoVideo,
    recordThreeVideo
]).then((messages) => {
    console.log(messages)
})

// execute first then stop
Promise.race([
    recordOneVideo,
    recordTwoVideo,
    recordThreeVideo
]).then((message) => {
    console.log(message)
})