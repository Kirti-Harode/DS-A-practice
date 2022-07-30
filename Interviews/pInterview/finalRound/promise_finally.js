async function myFinally(promise, onFinally) {
    try{
      let val = await promise;
      await onFinally()
      return val
    }catch(err){
      await onFinally()
      throw err
    }
}

