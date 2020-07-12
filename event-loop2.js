async function async1() {
  console.log('1 async1 start')
  await async3()
  console.log('2 async1 end')
  await async2()
}

async function async2() {
  console.log('3 async2 start')
}
async function async3() {
  console.log('33333')
}

console.log('4 script start')

setTimeout(() => {
  console.log('5 timeout')
}, 0)

async1()

new Promise((resolve, reject) => {
  console.log('6 promise 1')
  resolve()
})
.then(() => {
  console.log('7 promise 2')
})

console.log('8 script end')