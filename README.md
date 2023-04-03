# async-pool-slim

并发执行异步任务，可指定并发上限。

## 安装

```shell
pnpm add async-pool-slim
```

## 使用

```ts
const task1 = () =>
  request(url1)
    .then(v => console.log(v))
    .catch(e => console.error(e))

const task2 = () =>
  request(url2)
    .then(v => console.log(v))
    .catch(e => console.error(e))

const task3 = () =>
  request(url3)
    .then(v => console.log(v))
    .catch(e => console.error(e))

asyncPool([task1, task2], 2)
```

## API

### asyncPool(tasks: Task[], limit: number): Promise\<undefined>

* tasks：Task 数组。
* limit：并发数上限。

并发执行异步任务，可指定并发上限。返回一个Promise，所有任务执行完毕后转为 fulfilled 态，value 为undefined。

Task 的声明为 ```() => Promise<any>```。**返回的 Promise 最终应转为 fulfilled 态，其他逻辑请自行在中间处理。**
