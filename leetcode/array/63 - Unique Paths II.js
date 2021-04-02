
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0][0] === 1) {
      return 0
  }
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
      if (obstacleGrid[i][0] === 1) {
          break
      }
      res[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
      if (obstacleGrid[0][i] === 1) {
          break
      }
      res[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (obstacleGrid[i][j] !== 1) {
          res[i][j] = res[i - 1][j] + res[i][j - 1]
        }
      }
  }
  return res[m - 1][n - 1]
};

let a = [[0,0,0],[0,1,0],[0,0,0]]
uniquePathsWithObstacles(a)