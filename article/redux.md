1. reduce

```
// function f1(arg) {
//   console.log("f1", arg);
//   // return arg;
//   return 'f11';
// }
// function f2(arg) {
//   console.log("f2", arg);
//   // return arg;
//   return 'f22';
// }
// function f3(arg) {
//   console.log("f3", arg);
//   // return arg;
//   return 'f33';
// }

// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => (...args) => {
//     return a(b(...args));
//   });
// }

// let dispatch = compose(f1, f2, f3);

// let res = dispatch("omg");

// console.log("结果：", res); //sy-log

```

2. createStore

```
export default function createStore(reducer, enhancer) {
	if (enhancer) {
		return enhancer(createStore)(reducer)
	}
	let currentState = null
	let currentListeners = []

	// 获取store的state
	function getState() {
		return currentState
	}

	// 更改store
	function dispatch(action) {
		// store里面数据就更新了
		currentState = reducer(currentState, action)
		// 执行订阅事件
		currentListeners.forEach(cb => cb())
	}

	function subscribe(cb) {
		currentListeners.push(cb)

		// 提供取消订阅函数
		return () => {
			let index = currentListeners.indexOf(cb)
			currentListeners.splice(index, 1)
		}
	}

	// 默认值
	dispatch({ type: 'xxxx' }) // type随意，只需要执行下去使用reducer的初始值即可

	return {
		getState,
		dispatch,
		subscribe,
	}
}

```

3. applyMiddlewares