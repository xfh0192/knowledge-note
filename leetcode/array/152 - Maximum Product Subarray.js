/**
 * @param {number[]} nums
 * @return {number}
 */
// dp 复杂度过大
var maxProduct = function(nums) {
  let len = nums.length
  let max = nums[0]
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  for (let i = 0; i < len; i++) {
      dp[i][i] = nums[i]
  }
  for (let i = 0; i < len; i++) {
      for (let j = i; j < len; j++) {
        if (j === i) {
          dp[i][j] = nums[i]
        } else {
          dp[i][j] = dp[i][j - 1] * nums[j]
        }
          max = Math.max(max, dp[i][j])
      }
  }
  return max
};

// dp 滚动数组
var maxProduct = function(nums) {
  let len = nums.length
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]
  for (let i = 1; i < len; i++) {
    let tempMax = max
    let tempMin = min
    max = Math.max(tempMax * nums[i], Math.max(tempMin * nums[i], nums[i]))
    min = Math.min(tempMin * nums[i], Math.min(tempMax * nums[i], nums[i]))
    res = Math.max(res, max)
  }
  return res
}

let a = [2,3,-2,4]
// a = [0,2]
maxProduct(a)