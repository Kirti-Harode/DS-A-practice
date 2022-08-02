function race(promises) {
    return new Promise((resolve, reject) => {
      if(promises.length === 0) return resolve(result);
      
      promises.forEach(promise => {
        promise.then(res => {resolve(res)}, reject)
      })
    })
}