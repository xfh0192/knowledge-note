function _call(fn, ctx) {
    let context = Object.create(ctx)
    context.fn = fn
    context.fn(...Array.from(arguments).slice(2))
}

function _apply(fn, ctx) {
    let context = Object.create(ctx)
    context.fn = fn
    context.fn(...arguments.slice(2))
}

function _bind(fn, ctx) {
    let context = Object.create(ctx)
    context.fn = fn
    return function() {
        context.fn(Array.from(arguments).slice(2))
    }
}