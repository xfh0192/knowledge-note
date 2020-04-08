/**
 * 策略模式：
 * 定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换
 * 
 * 目的：将算法的使用、算法的实现分离
 */

// 策略类
var levelObj = {
    'A': function(money) {
        return money * 4
    },
    'B': function(money) {
        return money * 3
    },
    'C': function(money) {
        return money * 2
    },
}

// 环境类
var calculateBonus = function(level, money) {
    return levelObj[level](money)
}

console.log(calculateBonus('A', 10000)) // 40000