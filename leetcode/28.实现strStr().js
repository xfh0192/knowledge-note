/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 找出haystack中第一次出现needle的index，无则返回-1
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0
  }
  if (haystack.length < needle.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    let flag = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
};

let a = "mississippi"
let b = "mississippi"

let res = strStr(a,b)
console.log(res)