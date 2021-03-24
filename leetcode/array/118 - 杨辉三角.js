/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [[1]]
  for (let i = 1; i < numRows; i++) {
    let lastRow = res[i - 1]
    let row = new Array(lastRow.length + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = lastRow[j - 1] + lastRow[j]
    }
    res.push(row)
  }
  return res
};

let a = 5
let res = generate(a)
console.log(res);