/**
 * 装饰者模式：
 * 在不改变对象自身的基础上，在程序运行期间给对象动态地添加方法
 * 
 * 场景：
 * 原有方法维持不变，在原有方法上再挂载其他方法来满足现有需求；
 * 函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，实现相同的效果但增强了复用性
 */

// 用AOP装饰函数实现装饰者模式
Function.prototype.before = function(beforeFn) {
    let self = this     // 保存原函数上下文引用
    return function() {     // 返回包含了原函数和新函数的'代理函数'
        beforeFn.apply(this, arguments)     // 执行新函数，修正this
        return self.apply(this, arguments)  // 执行原函数
    }
}

Function.prototype.after = function(afterFn) {
    let self = this
    return function() {
        let ret = self.apply(this, arguments)
        afterFn.apply(this, arguments)
        return ret
    }
}

let func = function() {
    console.log('2')
}

// 挂载函数
let func1 = function() {
    console.log('1')
}
let func3 = function() {
    console.log('3')
}
func = func.before(func1).after(func3)
func()