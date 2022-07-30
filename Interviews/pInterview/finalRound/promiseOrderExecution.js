console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)

/**
 * 1
 * 2
 * 3
 * 4
 * promise handlers are added to the microTask queue and will run async
 * microTasks = [promise.then]
 * 7
 * macroTasks = [setTimeout[10]]
 * macroTasks = [setTimeout[0], setTimeout[10]]
 * current task (run script) is done, it's time to run all micro tasks
 * 5
 * microTasks = [promise.then.then] 
 * note: microTasks can add more microTasks and they will be picked up in the current
 * loop effectively delaying macroTasks (chrome has ways to address task starvation)
 * 6
 * when all micro tasks are done, then it picks the next macro
 * 9
 * there are no microTasks available, so picking up the next macro
 * 8
 */