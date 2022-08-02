let p  = new Promise((resolve, reject) => {
    resolve("success")
})


let q = Promise.resolve(p);
// console.log( q)
// console.log(p==q)

p.then(res => {return res}).finally(() =>{ } ).then(res => console.log(res)).catch(err => console.log(err))

