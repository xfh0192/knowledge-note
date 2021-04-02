/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0]
  let max = nums[0]
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
      let temp = sum + nums[i]
      if (temp >= nums[i]) {
          sum = temp
      } else {
          sum = nums[i]
      }
      max = Math.max(max, sum)
  }
  return max
};