console.log(1)

setTimeout(() => {
    console.log(2)
}, 100)

setImmediate(() => {
    console.log(3)
})

process.nextTick(() => {
    console.log(4)
})