/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  let s = x.toString()
  let newS = s.split('').reverse().join('')
  if (s === newS) {
      return true
  }
  return false
};

let s = 10
isPalindrome(s)