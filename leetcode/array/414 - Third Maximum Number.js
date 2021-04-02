/**
 * @param {number[]} nums
 * @return {number}
 */
// 维护三个数
var thirdMax = function(nums) {
  let max, mid, min
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i]
      if (num === max || num === mid) {
          continue
      }
      if (num > max || max === undefined) {
          min = mid
          mid = max
          max = num
      } else if (num > mid || mid === undefined) {
          min = mid
          mid = num
      } else if (num > min || min === undefined) {
          min = num
      }
  }
  if (min === undefined || mid === undefined) {
      return max
  }
  return min
};