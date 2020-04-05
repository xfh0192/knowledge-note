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
        this.state = 'fulfilled'
        this.value = value;
        this.resolveTask.forEach(task => this.value = resolvePromise(task, this.value))
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
                this.resolveTask.push(value => {
                    let v = onFulfilled(value)
                })
                this.rejectTask.push(value => {
                    onRejected(value)
                })
            });
        }
        if (this.state === 'fulfilled') {
            return new Promise((resolve, reject) => onFulfilled(this.value))
        }
        if (this.state === 'rejected') {
            return new Promise((resolve, reject) => onRejected(this.value))
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