/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (!nums.length) return false
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
      let mid = left + ((right - left) >> 1)
      if (nums[mid] === target) {
          return true
      } else if (nums[mid] > nums[left]) {
          if (target >= nums[left] && target <= nums[mid]) {
              right = mid - 1
          } else {
              left = mid + 1
          }
      } else if (nums[mid] < nums[right]) {
          if (target >= nums[mid] && target <= nums[right]) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      } else {
          if (nums[mid] === nums[left]) {
              left++
          }
          if (nums[mid] === nums[right]) {
              right--
          }
      }
  }
  return false
};