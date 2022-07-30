function all(promises) {
    if(promises.length === 0) return new Promise(resolve => resolve(promises))
    let completed = 0;
    let results = [];
    return new Promise((resolve, reject) => {
      for(let i = 0; i < promises.length; i++){
        let promise = promises[i];
        Promise.resolve(promise).then(value => {
          completed ++;
          results[i] = value;
          if(completed === promises.length){
            resolve(results);
          }
        }, err => {
          reject(err)
        })
      }
    })
    
}