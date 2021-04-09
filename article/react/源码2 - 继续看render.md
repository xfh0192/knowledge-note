## 源码记录

简单的react例子

> jsx 在react中，将会通过 React.createElement() 转化为一个描述 dom 的object

```javascript

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h1>hello world</h1>
  }
}

ReactDom.render(<HelloWorld/>, document.getElementById('content'))

```

## 思路记录

以上代码，创建新class的时候，只是创建了一个class，其中updater是空的，需要在`performUnitOfWork`（beginWork执行时）的时候才会被替换为真正的updater

```javascript
# packages\react-reconciler\src\ReactFiberClassComponent.new.js
function adoptClassInstance() {
  instance.updater = classComponentUpdater
  ...
}

# packages\react-reconciler\src\ReactFiberBeginWork.new.js
beginWork -> mountIndeterminateComponent -> adoptClassInstance
```

可以看到，updater更新是在beginwork的阶段，因此只需要继续追溯work的相关流程：

```javascript
workLoopSync -> performUnitOfWork
workLoopConcurrent -> performUnitOfWork
```

然后开始看ReactDom.render：简单来说就是在container（dom节点）上挂载fiber等一些属性，挂载过程中进行一些其他操作


scheduleUpdateOnFiber


---

## 代码

走 ReactDom.render 源码...

```javascript

# packages\react-dom\src\client\ReactDOMLegacy.js
export function render(
  element: React$Element<any>,
  container: Container,
  callback: ?Function,
) {
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    false,
    callback,
  );
}

// 这里生成fiberRoot，触发渲染
function legacyRenderSubtreeIntoContainer(
  parentComponent: ?React$Component<any, any>,
  children: ReactNodeList,
  container: Container,
  forceHydrate: boolean,
  callback: ?Function,
) {
  // TODO: Without `any` type, Flow says "Property cannot be accessed on any
  // member of intersection type." Whyyyyyy.
  let root: RootType = (container._reactRootContainer: any);
  let fiberRoot;
  if (!root) {
    // 生成fiberRoot
    // Initial mount
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
      container,
      forceHydrate,
    );
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // 触发渲染
    // Initial mount should not be batched.
    unbatchedUpdates(() => {
      // 这一part的起点
      updateContainer(children, fiberRoot, parentComponent, callback);
    });
  } else {
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Update
    updateContainer(children, fiberRoot, parentComponent, callback);
  }
  return getPublicRootInstance(fiberRoot);
}

```


```javascript

// 承接上一part的事件模型，继续分析主线逻辑

# packages\react-reconciler\src\ReactFiberReconciler.new.js

// 生成fiberRoot之后执行
export function updateContainer(
  element: ReactNodeList,
  container: OpaqueRoot,
  parentComponent: ?React$Component<any, any>,
  callback: ?Function,
): Lane {
  const current = container.current;
  const eventTime = requestEventTime();
  const lane = requestUpdateLane(current);

  if (enableSchedulingProfiler) {
    markRenderScheduled(lane);
  }

  const context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  const update = createUpdate(eventTime, lane);
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = {element};

  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    update.callback = callback;
  }

  enqueueUpdate(current, update, lane);
  const root = scheduleUpdateOnFiber(current, lane, eventTime);
  if (root !== null) {
    entangleTransitions(root, current, lane);
  }

  return lane;
}

```