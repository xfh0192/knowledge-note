/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len = Math.max(a.length, b.length)
  let res = []
  let carry = 0
  for (let i = 0; i < len; i++) {
    let charA = a.charAt(a.length - i - 1)
    let n1 = charA === '1' ? 1 : 0
    let charB = b.charAt(b.length - i - 1)
    let n2 = charB === '1' ? 1 : 0

    let num = (n1 + n2 + carry) & 1
    res.push(num)

    carry = (n1 + n2 + carry) >> 1
  }

  if (carry > 0) {
    res.push(1)
  }
  res.reverse()
  res = res.join('')
  return res
};

let a = '11'
let b = '1'
// '100'

let res = addBinary(a,b)
console.log(res)