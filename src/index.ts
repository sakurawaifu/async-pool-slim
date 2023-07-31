export type Task = () => Promise<unknown>

const asyncPool = (tasks: Task[], limit: number): Promise<undefined> =>
  new Promise(resolve => {
    let nextIndex = 0
    let fulfilledNum = 0
    const next = () => {
      if (nextIndex < tasks.length) {
        tasks[nextIndex++]()
          .then(() => {
            fulfilledNum++
            if (fulfilledNum === tasks.length) {
              resolve(undefined)
              return
            }

            next()
          })
      }
    }

    const endIndex = Math.min(limit, tasks.length)
    for (let i = 0; i < endIndex; i++) {
      next()
    }
  })

export default asyncPool
