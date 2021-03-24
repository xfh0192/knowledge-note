/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 0) return 0
  let dp = new Array(triangle[triangle.length - 1].length)
  dp[0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      if (j === triangle[i].length - 1) {
        // 最右边
        dp[j] = triangle[i][j] + dp[j - 1]
      } else if (j === 0) {
        // 最左边
        dp[j] = triangle[i][j] + dp[j]
      } else {
        dp[j] = triangle[i][j] + Math.min(dp[j], dp[j - 1])
      }
    }
  }
  
  let min = dp[0]
  for (let i = 0; i < dp.length; i++) {
    min = Math.min(min, dp[i])
  }
  return min
};

// let a = [[2],[3,4],[6,5,7],[4,1,8,3]]  // 11
a = [[-1],[2,3],[1,-1,-3]]  // -1
minimumTotal(a)
