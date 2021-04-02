/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let flagRow = new Array(m).fill(false)
  let flagCol = new Array(n).fill(false)
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              flagRow[i] = true
              flagCol[j] = true
          }
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (flagRow[i] || flagCol[j]) {
              matrix[i][j] = 0
          }
      }
  }
};