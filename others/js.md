1. 解释下 instanceof

**instanceof**操作符，用于检查构造函数的原型对象，是否出现在某个对象的原型链上

```
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// defining constructors
function C() {}
function D() {}

let o = new C()

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D

o instanceof Object           // true, because:
C.prototype instanceof Object // true
```

实现：

```
function instanceof (left, right) {
  left = Object.getPrototypeOf(left)
  while(left) {
    if (left === right.prototype) return true
    left = Object.getPrototypeOf(left)
  }
  return false
}
```

2. 讲一下this
    - 指向当前执行环境对象的指针
    - 可以通过call、apply、bind等方法修改this指向
    - 箭头函数定义时this指针就固定了，不可变更

3. 箭头函数
    箭头函数有几个使用注意点。
      - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
      - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
      - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
      - 不可以使用yield命令，因此箭头函数不能用作Generator函数

4. 讲一下websocket

5. 事件循环 event loop
  - 执行栈
  - 异步操作：网络请求、定时器等
  - 消息队列

5. 事件循环、macrotask、microtask
    - (task/microtask)[https://zhuanlan.zhihu.com/p/24460769]

    web：
      - macrotask 宏任务，包括：js线程同步执行的任务、定时器任务等
      - microtask 微任务，包括：promise.then的回调函数，mutation observe等
      - 当每一个宏任务执行完毕，js线程会检查微任务的执行条件，一旦条件全部满足，马上执行所有微任务，清空微任务队列
      - 微任务执行条件：1. 执行栈为空 2. 微任务队列不为空
      - 微任务有可能向队列添加新的微任务，仍然会在当前队列中被执行
      - 浏览器渲染会在每一次微任务队列清空后执行，也就是说如果微任务进行了一批dom操作，浏览器将会渲染一次

    node：
      - 比web多了两个定时器方法：nextTick、setImmediate

6. 浏览器渲染顺序

7. 异步编程
     > 参考：(异步编程的4种方法)[http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html]

    - js的执行环境是单线程（single thread）
    - I/O处理需要回调函数异步处理（异步IO）
    - 前端异步IO可以消除UI阻塞，提高用户体验
    - 而放在后端则可以提高CPU和内存利用率

    1. 串联异步处理
    2. 事件监听方式处理

8. generator

9. 注意sort函数，(链接)[https://www.w3school.com.cn/js/jsref_sort.asp]
      - 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

       如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

       若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
       若 a 等于 b，则返回 0。
       若 a 大于 b，则返回一个大于 0 的值。

      ```
        字符编码：

          var arr = new Array(6)
          arr[0] = "George"
          arr[1] = "John"
          arr[2] = "Thomas"
          arr[3] = "James"
          arr[4] = "Adrew"
          arr[5] = "Martin"

          document.write(arr + "<br />")
          document.write(arr.sort())

        数值大小：

          var arr = new Array(6)
          arr[0] = "10"
          arr[1] = "5"
          arr[2] = "40"
          arr[3] = "25"
          arr[4] = "1000"
          arr[5] = "1"

          document.write(arr + "<br />")
          document.write(arr.sort((a,b) => a - b))    // 注意这里，按照返回的值大于0还是小于0排序
      ```

10. ==/===
11. == 的隐性类型转换规则
12. Object.is()
    - https://dmitripavlutin.com/object-is-vs-strict-equality-operator/
      > The difference between strict equality check and Object.is() lies in how NaN and how negative zero -0 are treated.

      ```
        NaN === NaN; // => false
        NaN === 1;   // => false
        -0 === +0; // => true

        Object.is(NaN, NaN); // => true
        Object.is(NaN, 1);   // => false
        Object.is(-0, +0); // => false
      ```

13. https://es6.ruanyifeng.com/#docs/string-methods
    
    - 'a'.charAt(i) 返回字符（不能识别大于ffff的字符）

    - 'a'.charCodeAt 返回字符Unicode（不能识别
    
    - 'a'.codePointAt(i) 返回字符unicode（能识别
    
    - String.fromCodePoint(0x20BB7) // "ஷ"
    返回unicode对应的字符，能识别

14. toString parseInt 处理进制
    - (10).toString(16) // 'a'
    - parseInt(x, r)  // x: 待转换数; r: 待转换数的进制  return => 10进制数

15. cmd/amd

16. 装饰器

17. 面向对象、函数式编程
      1. 面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。
          - 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。
          - 对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。
            - 对象是单个实物的抽象。
            - 对象是一个容器，封装了属性（property）和方法（method）。

      2. 函数式编程（如柯里化，高阶函数）
          - https://www.zhihu.com/question/28292740?sort=created
          - https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html#%E4%B8%BA%E4%BD%95%E9%92%9F%E7%88%B1%E4%B8%80%E7%AD%89%E5%85%AC%E6%B0%91

          - 数学中的函数：**一种东西和另一种东西之间的对应关系**
          - 函数式编程的本质：函数式编程中的函数这个术语不是指计算机中的函数（实际上是Subroutine），而是指数学中的函数，即自变量的映射。也就是说一个函数的值仅决定于函数参数的值，不依赖其他状态。
          - 在函数式语言中，函数作为**一等公民**，可以在任何地方定义
          - 函数式编程主要的好处：不可变性 -> 没有可变的状态，函数就是引用透明（Referential transparency）的和没有副作用（No Side Effect）
            - **函数即不依赖外部的状态也不修改外部的状态（纯函数）**，函数调用的结果不依赖调用的时间和位置，这样写的代码容易进行推理，不容易出错。这使得单元测试和调试都更容易。
             > **纯函数**是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。
          - 函数式语言当然还少不了以下特性:
            - 高阶函数（Higher-order function）
            - 偏应用函数（Partially Applied Functions）
            - 柯里化（Currying）
            - 闭包（Closure）

18. 函数升阶、柯里化
    - 概念同上