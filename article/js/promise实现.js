// 看这个：https://mp.weixin.qq.com/s/_YxwV2umR7PH-R2ouCepSQ

class MyPromise {
  constructor(cb) {
    this._state = 'pending'
    this._value = null;
    this._resolveQueue = [];
    this._rejectQueue = []

    const _resolve = (value) => {
      // 把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      // 保证执行流程是：new Promise -> then()收集回调 -> resolve/reject执行回调
      const run = () => {
        if (this._state !== 'pending') return;
        this._state = 'fulfilled'
        this._value = value;

        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(value)
        }
      }
      setTimeout(run)
    }
    
    const _reject = (value) => {
      const run = () => {
        if (this._state !== 'pending') return;
        this._state = 'rejected'
        this._value = value

        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(value)
        }
      }
      setTimeout(run)
    }

    cb(_resolve, _reject)
  }


  then(onFulfilled, onRejected) {
    // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
    typeof onFulfilled !== 'function' ? onFulfilled = value => value : null
    typeof onRejected !== 'function' ? onRejected = error => error : null

    return new Promise((resolve, reject) => {

      const fulfilledFn = (value) => {
        try {
          const x = onFulfilled(value)
          x instanceof Promise ? x.then(resolve, reject) : resolve(x)
        } catch(e) {
          reject(e)
        }
      }

      const rejectFn = (error) => {
        try {
          const x = onRejected(error)
          x instanceof Promise ? x.then(resolve, reject) : resolve(x)
        } catch(e) {
          reject(e)
        }
      }

      // 
      switch (this._state) {
        case 'pending':
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectFn)
          break;
        case 'fulfilled':
          fulfilledFn(this._value)
          break;
        case 'rejected':
          rejectFn(this._value)
          break;
      }
    })
  }

  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }

  finally(callback) {
    return this.then(
      value => Promise.resolve(callback()).then(() => value),
      error => Promise.resolve(callback()).then(() => { throw error}),
    )
  }

  static resolve(value) {
    if (value instanceof Promise) {
      return value
    }

    return new Promise(resolve => resolve(value))
  }

  static reject(error) {
    return new Promise((resolve, reject) => reject(error))
  }

  static all(promiseArr) {
    let index = 0
    let result = []
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
        Promise.resolve(p).then(
          value => {
            index++
            result[i] = value

            if (index === promiseArr.length) {
              resolve(result)
            }
          },
          error => {
            reject(error)
          }
        )
      })
    })
  }
    
  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      for (let p of promiseArr) {
        Promise.resolve(p).then(
          value => {
            resolve(value)
          },
          error => {
            reject(error)
          }
        )
      }
    })
  }

}
