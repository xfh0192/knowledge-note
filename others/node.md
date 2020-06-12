
## 文章

- (详解 Node.Js 中实现端口重用原理)[https://segmentfault.com/a/1190000014701988]

---

1. 异步非阻塞I/O
   - CPU、内存运算速度相对较快，但是IO较慢（磁盘、网络、人反应时间）
   - 例子：王大爷A有个水壶B
     - 同步阻塞：A用B烧水，等待B烧完再去干其他事情
     - 同步非阻塞：A用B烧水，就去做其他事C，偶尔检查一下B烧好没
     - 异步阻塞：A用B烧水，等待B完成，水好了会发出响声
     - 异步非阻塞：A用B烧水，就去做其他事，水好了会发出响声通知A
     - 【总结】**阻塞非阻塞说明的是A的状态，同步异步说明的是B的调用姿势**。B能在完成时发出通知，就等于异步的意思，在结束时通知主线程调起回调。
     - **所以异步一般配合非阻塞，才能发挥作用**

2. promisify
3. 流
4. buffer
5. event loop
    - (导图)[https://www.processon.com/view/link/5e70b1c2e4b011fcce9b89b5#map]
6. process.nextTick/setImmediate/setTimeout
7. require 引入文件搜寻顺序