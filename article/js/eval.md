# eval 函数

在 `webpack` 打包出来的模块里面，发现都使用了 `eval` 函数，因此了解一下

> [ndm](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

## 使用

1. eval() 的参数是一个字符串。如果字符串表示的是表达式，eval() 会对表达式进行求值。如果参数表示一个或多个 JavaScript 语句，那么eval() 就会执行这些语句。
2. 如果 eval() 的参数不是字符串， eval() 会将参数原封不动地返回。

```javascript
eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象
eval("2 + 2");             // returns 4
```

可以使用一些方法绕开限制，例如 `toString()`

```javascript
var expression = new String("2 + 2");
eval(expression.toString());
```

【注意】需要的时候，请直接使用而不要间接使用，避免引起作用域问题（参考mdn文档）