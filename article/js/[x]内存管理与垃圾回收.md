## 垃圾收集

1. 标记清除
2. 引用计数
   - 循环引用

## 性能问题

## 管理内存

## WeakSet 和 WeakMap

弱引用

下面以 WeakMap 为例，看看它是怎么解决内存泄漏的。

```javascript
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
```

上面代码中，先新建一个 Weakmap 实例。然后，将一个 DOM 节点作为键名存入该实例，并将一些附加信息作为键值，一起存放在 WeakMap 里面。这时，WeakMap 里面对element的引用就是弱引用，不会被计入垃圾回收机制。

也就是说，DOM 节点对象的引用计数是1，而不是2。这时，一旦消除对该节点的引用，它占用的内存就会被垃圾回收机制释放。Weakmap 保存的这个键值对，也会自动消失。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

---

1. http://www.ruanyifeng.com/blog/2017/04/memory-leak.html