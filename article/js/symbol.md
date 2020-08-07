# Symbol

> https://es6.ruanyifeng.com/#docs/symbol

## Symbol.toStringTag

对象的 `Symbol.toStringTag` 属性，指向一个方法。在该对象上面调用 `Object.prototype.toString` 方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。

【用途】也就是说，这个属性可以用来定制 `[object Object]` 或 `[object Array]` 中 `object` 后面的那个字符串。

```javascript
// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"

```

ES6 还新增了一批内置对象的 `Symbol.toStringTag`，详见文档。如

- JSON[Symbol.toStringTag]：'JSON'
- Promise.prototype[Symbol.toStringTag]：'Promise'

例如：`webpack` 打包后文件的使用

```javascript
// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
```