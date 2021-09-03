/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let res = []
  while(columnNumber > 0) {
    let a0 = (columnNumber - 1) % 26 + 1
    let char = String.fromCharCode(a0 - 1 + 'A'.charCodeAt())
    res.push(char)
    columnNumber = Math.floor((columnNumber - a0) / 26)
  }
  res.reverse()
  return res.join('')
};