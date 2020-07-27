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

3. new 一个对象

```
# 正常
function Person(name, sex) {
  this.name = name
  this.sex = sex
}
let john = new Person('john', 'male')

# 模拟
function createPerson(ctr) {
  let person = {}
  ctr.apply(person, Array.from(arguments).slice(1))
  person.prototype.constructor = ctr
  return person
}
let mary = createPerson(Person, 'mary', 'female')
```

1. 箭头函数
    箭头函数有几个使用注意点。
      - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
      - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
      - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
      - 不可以使用yield命令，因此箭头函数不能用作Generator函数

2. 讲一下websocket

3. promise.all 执行顺序？出现错误怎么处理？

4. 异步编程
     > 参考：(异步编程的4种方法)[http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html]

    - js的执行环境是单线程（single thread）
    - I/O处理需要回调函数异步处理（异步IO）
    - 前端异步IO可以消除UI阻塞，提高用户体验
    - 而放在后端则可以提高CPU和内存利用率

    1. 串联异步处理
    2. 事件监听方式处理

5.  generator

6.  注意sort函数，(链接)[https://www.w3school.com.cn/js/jsref_sort.asp]
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

7.  ==/===
8.  == 的隐性类型转换规则
9.  Object.is()
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

10. https://es6.ruanyifeng.com/#docs/string-methods
    
    - 'a'.charAt(i) 返回字符（不能识别大于ffff的字符）

    - 'a'.charCodeAt 返回字符Unicode（不能识别
    
    - 'a'.codePointAt(i) 返回字符unicode（能识别
    
    - String.fromCodePoint(0x20BB7) // "ஷ"
    返回unicode对应的字符，能识别

11. toString parseInt 处理进制
    - (10).toString(16) // 'a'
    - parseInt(x, r)  // x: 待转换数; r: 待转换数的进制  return => 10进制数

12. cmd/amd

13. 装饰器
    - https://es6.ruanyifeng.com/#docs/decorator#%E6%96%B9%E6%B3%95%E7%9A%84%E8%A3%85%E9%A5%B0
    - 装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。
    - **只能装饰类、类的方法**，不能装饰函数。因为存在函数提升
      - 类：装饰器函数的第一个参数，就是所要装饰的目标类。
      - 类的方法：
          1. 装饰器第一个参数是类的原型对象，上例是Person.prototype，装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）；第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象。
          2. 另外，上面代码说明，装饰器（readonly）会修改属性的描述对象（descriptor），然后被修改的描述对象再用来定义属性。
          ```
              function readonly(target, name, descriptor){
                // descriptor对象原来的值如下
                // {
                //   value: specifiedFunction,
                //   enumerable: false,
                //   configurable: true,
                //   writable: true
                // };
                descriptor.writable = false;
                return descriptor;
              }

              readonly(Person.prototype, 'name', descriptor);
              // 类似于
              Object.defineProperty(Person.prototype, 'name', descriptor);
          ```

14. 面向对象、函数式编程
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

15. 函数升阶、柯里化
    - 概念同上

16. 前端video播放器
    - https://mp.weixin.qq.com/s/thnhhbw2ieFywCFSCHXyGQ
    - Blob：在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据
    - TypeBuffer：它用于表示通用的，固定长度的原始二进制数据缓冲区。你不能直接操纵 ArrayBuffer 的内容，而是需要创建一个 TypedArray 对象或 DataView 对象，该对象以特定格式表示缓冲区，并使用该对象读取和写入缓冲区的内容。