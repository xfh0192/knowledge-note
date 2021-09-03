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

// ===
// 投票算法
var majorityElement = function(nums) {
  let num = null
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      num = nums[i]
    }
    if (nums[i] === num) {
      count++
    } else {
      count--
    }
  }
  return num
}
