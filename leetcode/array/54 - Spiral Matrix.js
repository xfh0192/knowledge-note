/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let sum = m * n
  let count = 0
  let top = 0
  let bottom = matrix.length - 1
  let right = matrix[0].length - 1
  let left = 0
  let res = []
  while(count < sum) {
      let i = top
      let j = left
      for (; j <= right; j++) {
          if (count >= sum) return res
          res.push(matrix[i][j])
          count++
      }

      i = top + 1
      j = right
      for (; i <= bottom; i++) {
          if (count >= sum) return res
          res.push(matrix[i][j])
          count++
      }

      i = bottom
      j = right - 1
      for (; j >= left; j--) {
          if (count >= sum) return res
          res.push(matrix[i][j])
          count++
      }

      i = bottom - 1
      j = left
      for (; i > top; i--) {
          if (count >= sum) return res
          res.push(matrix[i][j])
          count++
      }
      top++
      bottom--
      left++
      right--
  }
  return res
};