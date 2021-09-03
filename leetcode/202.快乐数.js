/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = {}
  while(n >= 1) {
    n = n.toString().split('')
    let sum = n.reduce((s, num) => {
      num = parseInt(num)
      return s + num * num
    }, 0)
    if (sum === 1) {
      return true
    } else if (sum < 1 || map[sum]) {
      return false
    } else {
      map[sum] = true
    }
    n = sum
  }
};

let a = 19
let res = isHappy(a)
console.log(res)