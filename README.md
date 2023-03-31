# async-pool-slim

并发执行异步任务，可指定并发上限

## asyncPool(tasks: Task[], limit: number)

```ts
// Task 类型声明
Task = () => Promise<any>
```

* tasks：Task数组。
* limit：并发数上限。
