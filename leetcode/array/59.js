/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = []
  for (let i = 0; i < n; i++) {
      res[i] = new Array(n).fill(0)
  }

  let sum = n * n
  let count = 1
  let round = 0
  let i = 0
  let j = 0
  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1
  while(round < ((n + 1) >> 1)) {
      i = round
      j = round
      while(j <= right) {
          res[i][j] = count
          j++
          count++
      }
      i++
      j--

      while(i <= bottom) {
          res[i][j] = count
          i++
          count++
      }
      i--
      j--

      while(j >= left) {
          res[i][j] = count
          j--
          count++
      }
      i--
      j++

      while(i >= top + 1) {
          res[i][j] = count
          i--
          count++
      }
      i--
      j++

      top++
      bottom--
      left++
      right--
      round++
  }
  return res
};

let a = 3
generateMatrix(a)