/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let n = nums.length
  let maxPosition = 0
  let end = 0
  let count = 0
  for(let i = 0; i < n; i++) {
      let maxPosition = Math.max(maxPosition, nums[i] + i)
      if (i === end) {
          end = maxPosition
          count++
      }
  }
  return count
};