export type Task = () => Promise<any>

const asyncPool = (tasks: Task[], limit: number) => {
  let nextIndex = 0
  const next = () => void tasks[nextIndex++]().then(next)

  const endIndex = Math.min(limit, tasks.length)
  for (let i = 0; i < endIndex; i++) {
    next()
  }
}

export default asyncPool
