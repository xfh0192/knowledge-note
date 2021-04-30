/**
 * @param {string} s
 * @return {string}
 */
// 1. dp
// 2. 中心扩展
var longestPalindrome = function(s) {
  if (!s) return ''
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i)  // 单中心
    let len2 = expandAroundCenter(s, i, i + 1)  // 双中心
    let len = Math.max(len1, len2)
    if (len > right - left) {
      left = i - ((len - 1) >> 1)
      right = i + (len >> 1)
    }
  }
  return s.substring(left, right + 1)
};

function expandAroundCenter(s, left, right) {
  while(left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

let a = "cbbd"
let res = longestPalindrome(a)
console.log(res)