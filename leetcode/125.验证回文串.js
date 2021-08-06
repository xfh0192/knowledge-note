/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase()
  for (let i =  0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false
    }
  }
  return true
};

let a = "A man, a plan, a canal: Panama"

let res = isPalindrome(a)
console.log(res)