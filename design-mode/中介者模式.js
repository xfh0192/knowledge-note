/**
 * 中介者模式：
 * 通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互作用，
 * 当其中的一个对象发生改变时，只需要通知中介者对象即可
 * 通过中介者模式，可以解除对象与对象之间的紧耦合关系
 */

// 手机库存
let goods = {
    'red|32G': 3,
    'red|64G': 1,
    'blue|32G': 7,
    'blue|64G': 6,
}

// 中介者
let mediator = (function() {
    let colorSelect = document.querySelector('#colorSelect')
    let memorySelect = document.querySelector('#memorySelect')
    let numSelect = document.querySelector('#numSelect')

    return {
        changed: function(obj) {
            switch(obj) {
                case colorSelect:
                    // TODO
                    break;
                case memorySelect:
                    // TODO
                    break;
                case numSelect:
                    // TODO
                    break;
            }
        }    
    }
})()

colorSelect.onchange = function() {
    mediator.changed(this)
}
memorySelect.onchange = function() {
    mediator.changed(this)
}
numSelect.onchange = function() {
    mediator.changed(this)
}