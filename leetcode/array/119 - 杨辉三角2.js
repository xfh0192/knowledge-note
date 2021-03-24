/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 1) return [1]
  let row = [1]
  for (let i = 0; i < rowIndex; i++) {
    let temp = row.slice()
    for (let j = 1; j < row.length; j++) {
        row[j] = temp[j] + temp[j - 1]
    }
    row.push(1)
  }
  return row
};

let a = 3
getRow(a) // [1,3,3,1]