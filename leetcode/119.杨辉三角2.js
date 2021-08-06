/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  let row = [1, 1]
  for (let i = 2; i <= rowIndex; i++) {
    let tempRow = row.slice()
      for (let j = 1; j < i; j++) {
          row[j] = tempRow[j] + tempRow[j - 1]
      }
      row.push(1)
  }
  return row
};

let a = 2

a = 3
// [1,3,3,1]

let res = getRow(a)
console.log(res)