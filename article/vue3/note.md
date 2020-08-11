1. 功能import的写法，相比this，可以做静态分析，方便tree-shaking
2. 所谓的数据，就是一个变量，方法就是一些普通的函数，好处是可以随意组合
   1. 代码复用，vue2 用的是 mixin
      composition 组合

三大核心模块
1. reactivity 响应式，独立的模块。
2. runtime
3. compile

vue3 为什么快
1. proxy 取代 defineProperty
2. **静态标记**【重要】 可以做到真正意义上的按需更新

vdom diff
1. 动态节点做了标记，标记出需要修改的地方

