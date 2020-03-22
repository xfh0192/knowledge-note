class Promise {
    constructor(cb) {
        this.state = 'pending'
        this.task = [];
        cb.call(this, this.resolve, this.reject)
    }

    resolve() {
        this.state = 'resolve'

    }

    reject() {

    }

    then(cb) {
        this.task.push(cb);
        return this;
    }
    
}