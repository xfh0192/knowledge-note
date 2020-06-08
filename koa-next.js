let list = [function a(next){}, function b(next){}]
function run(list) {

    function next() {
        return new Promise((resolve, reject) => {
            resolve(list[++i] ? list[++i].call(null) : null)
        })
    }
    
    let i = 0
    let fn = list.shift()
    fn.call(null, next)
}
