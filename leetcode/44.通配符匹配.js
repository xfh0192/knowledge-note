/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// https://blog.csdn.net/ykjs_/article/details/105185808
// 指针
var isMatch = function(s, p) {
  let i = 0
  let j = 0
  let i1 = -1
  let j1 = -1
  let n1 = s.length
  let n2 = p.length
  while (i < n1) {
    if (j < n2 && (p[j] === '?' || s[i] === p[j])) {
      i++
      j++
    } else if (j < n2 && p[j] === '*') {
      i1 = i
      j1 = j
      j++
    } else if (i1 !== -1) {
      i = ++i1
      j = j1 + 1
    } else {
      return false
    }
  }
  while (j < n2 && p[j] === '*') {
    j++
  }
  return j === n2
};

let a = 'adceb'
let b = 'a**b'

// a = 'aa'
// b = 'a'

let res = isMatch(a,b)
console.log(res)