/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let res = 0
  let multiple = 1
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let plusVal = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
    res += plusVal * multiple
    multiple *= 26
  }
  return res
};

let a = 'AB'

titleToNumber(a)