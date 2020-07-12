/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s || numRows === 1) return s
  let rows = []
  for (let i = 0; i < numRows; i++) {
    rows[i] = ''
  }
  
  let row = 0
  let down = false  // 第一次会反向
  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i]
    if (row === numRows - 1 || row === 0) {
      down = !down
    }
    row += down ? 1 : -1
  }

  let res = ''
  for (let i = 0; i < rows.length; i++) {
    res += rows[i]
  }
  return res
};

let a = convert("PAYPALISHIRING", 3)
console.log(a)