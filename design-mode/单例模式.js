/**
 * 单例模式的定义：
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 * 
 * 适用场景：一个单一对象。如：弹窗，无论点击多少次，只创建一个弹窗
 */

class CreateUser {
    constructor(name) {
        this.name = name
        this.getName()
    }

    getName() {
        return this.name
    }
}

// 代理实现单例模式
var proxyMode = (function() {
    let instance = null
    return function(name) {
        if (!instance) {
            instance = new CreateUser(name)
        }
        return instance
    }
})()

// 创建两个单例实例
let a = new proxyMode('aaa')
let b = new proxyMode('bbb')

// 因为单例模式只实例化一次，所以下面实例相等
console.log(a === b)