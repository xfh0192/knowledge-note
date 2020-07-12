
1. [html标准](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
2. 事件循环 event loop
    ```
      参考了window系统浏览器窗口的event loop

      html标准定义的，用于协调用户交互的一个机制(用户交互(鼠标键盘)、脚本（JavaScript）、渲染（如html dom、css样式）、网络等行为)

      与其说是JavaScript提供了事件循环，不如说是嵌入JavaScript的user agent需要通过事件循环来与多种事件源交互
    ```



  - 执行栈
  - 异步操作：网络请求、定时器等
  - 消息队列