/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用map
var majorityElement = function(nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
      if (map[nums[i]] > nums.length / 2) {
          return nums[i]
      }
  }
};

// =====

// 因为所求数出现次数大于n/2，因此可以使用投票算法
var majorityElement = function(nums) {
  let major = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === major) {
          count++
      } else if (count > 0) {
          count--
      } else {
          major = nums[i]
          count = 1
      }
  }
  return major
};