/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (!s) {
    return 0
  }
  let arr = s.split(' ').reverse()
  return arr[0].length
};

// ===
var lengthOfLastWord = function(s) {
  s = s.trim()
  if (!s) {
    return 0
  }
  let i = s.length - 1
  let res = 0
  while (i >= 0) {
    if (s[i] === ' ') {
      return res
    }
    i--
    res++
  }
  return res
}



let s = "Hello World"
// 5