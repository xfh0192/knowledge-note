/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true
  let max = 0
  for (let i = 0; i < nums.length; i++) {
      // 说明前面的点都跳不到i这个点，无法到达
      if (i > max) {
          return false
      }
      max = Math.max(max, i + nums[i])
  }
  return true
};