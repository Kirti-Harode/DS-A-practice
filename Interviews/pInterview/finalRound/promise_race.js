function race(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      if(promises.length === 0) return resolve(result);
      
      promises.forEach(promise => {
        promise.then(resolve, reject)
      })
    })
}