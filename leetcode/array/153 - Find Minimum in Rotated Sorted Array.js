/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) return nums[0]
  if (nums[0] < nums[nums.length - 1]) return nums[0]
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
      let mid = left + ((right - left) >> 1)
      if (nums[mid] > nums[mid + 1]) {
          return nums[mid + 1]
      }
      if (nums[mid - 1] > nums[mid]) {
          return nums[mid]
      }
      
      if (nums[mid] >= nums[left]) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return nums[left]
};