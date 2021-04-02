/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length
  let pos = 0
  for (let i = 0; i < len; i++) {
      if (nums[i] !== val) {
          nums[pos] = nums[i]
          pos++
      }
  }
  return pos
};