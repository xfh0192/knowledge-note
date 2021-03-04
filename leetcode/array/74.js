/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  let i = 0
  let j = 0
  let m = matrix.length
  let n = matrix[0].length
  let left = 0
  let right = m * n - 1
  while(left <= right) {
      let mid = left + ((right - left) >>> 1)
      let midValue = matrix[Math.floor(mid / n)][mid % n]
      if (midValue === target) {
          return true
      } else if (midValue > target) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }
  return false
};

let a = [[1,1]]
let b = 2
let res = searchMatrix(a, b)
console.log(res);