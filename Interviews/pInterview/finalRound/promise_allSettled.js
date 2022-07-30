function allSettled(promises) {
    return new Promise((resolve) => {
      const result = [];
      let completed = 0;
      if (promises.length === 0) {
        resolve(result);
      }
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => result[index] = { status: "fulfilled", value })
          .catch((reason) => result[index] = { status: "rejected", reason })
          .finally(() => {
            completed++;
            if (completed === promises.length) {
              resolve(result);
            }
          });
      });
    });
}