/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (i - map[num] <= k) {
      return true
    } else {
      map[num] = i
    }
  }
  return false
};