# async-pool-slim

并发执行异步任务，可指定并发上限

## asyncPool(tasks: Task[], limit: number)

* tasks：Task数组。
* limit：并发数上限。

Task 的声明为 ```() => Promise<any>```。返回的 Promise 最终应转为 fulfilled 态，其他逻辑请自行在中间处理。

## example

```ts
const task1 = () =>
  request(url1)
    .then(v => console.log(v))
    .catch(e => console.error(e))

const task2 = () =>
  request(url2)
    .then(v => console.log(v))
    .catch(e => console.error(e))

asyncPool([task1, task2], 1)
```
