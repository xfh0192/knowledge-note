## 结构记录

```JavaScript

/**
 * container: body
 */

let container = {

  // root: RootType
  _reactRootContainer: {

    // fiberRoot => new FiberRootNode
    // _internalRoot: new FiberRootNode()
    _internalRoot: {
      // ...

      // type: fiber/fiberNode
      // createHostRootFiber(): uninitializedFiber
      // uninitializedFiber
      current: {

        // container._reactRootContainer._internalRoot
        stateNode,  // fiberRoot

        mode, // NoMode
        memoizedState: {
          element: null,
          cache: new Map() | null,
        },
        // type: UpdateQueue
        updateQueue: {
          baseState: fiber.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: NoLanes,
          },
          effects: null,
        },
        
        context: {},
        alternate
      }
    }
  }
}

```