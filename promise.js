// 看这个：https://mp.weixin.qq.com/s/_YxwV2umR7PH-R2ouCepSQ

// TODO: 尚待检查：假如then的fulfilled/rejected返回了Promise，使用resolvePromise是否正确

class Promise {
    constructor(cb) {
        this.state = 'pending'
        this.value = null;
        this.resolveTask = [];
        this.rejectTask = []
        try {
            cb(this.resolve.bind(this), this.reject.bind(this))
        } catch(err) {
            this.reject(err)
        }
    }

    resolve(value) {
        if (this.state !== 'pending') return;
        // this.state = 'fulfilled'
        this.value = value;
        
        if (value.thenable) {
            value.then(res => {
                // this.value = res
                this.state = 'fulfilled'
                this.resolve(res)
                // new Promise((resolve, reject) => {
                //     resolve(res)
                // })
                // pm.resolveTask = pm.resolveTask.concat(this.resolveTask)
                // pm.rejectTask = pm.rejectTask.concat(this.rejectTask)
                // return pm
            })
        }
        else {
            this.state = 'fulfilled'
            // this.resolveTask.forEach(task => this.value = resolvePromise(task, this.value))
        }
    }
    
    reject(value) {
        if (this.state !== 'pending') return;
        this.state = 'rejected'
        this.value = value
        this.rejectTask.forEach(task => this.value = resolvePromise(task, this.value))
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'pending') {
            return new Promise((resolve, reject) => {
                resolve(this.value)
                // this.resolveTask.push(value => {
                //     let v = onFulfilled(value)
                // })
                // this.rejectTask.push(value => {
                //     onRejected(value)
                // })
            });
        }
        if (this.state === 'fulfilled') {
            return new Promise((resolve, reject) => resolve(onFulfilled(this.value)))
        }
        if (this.state === 'rejected') {
            return new Promise((resolve, reject) => reject(onRejected(this.value)))
        }
    }

    catch(cb) {

    }
    
}

function resolvePromise(cb, value) {
    if (cb instanceof Promise) {
        return cb(value).then(val => resolvePromise(Promise.resolve.bind(this), val))
    }
    return value;
}
