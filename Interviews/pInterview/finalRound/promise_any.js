function any(promises) {
    return new Promise((resolve, reject) => {
      let errors = [];
      let rejected = 0;
      if(promises.length === 0) return new AggregateError("No promises were passed")
  
      promises.forEach((promise, index) => {
        promise
        .then(resolve)
        .catch(err => {
          rejected ++;
          errors[index] = err;
          if(rejected === promises.length){
            reject(new AggregateError( 'No Promise in Promise.any was resolved', errors))
          }
        })
      })
    })
}