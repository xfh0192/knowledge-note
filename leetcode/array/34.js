/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(nums.length < 1) return [-1, -1]
  return [
    binarySearch(nums, target, true),
    binarySearch(nums, target, false)
  ]
};

function binarySearch(nums, target, lower) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
    let mid = left + ((right - left) >>> 1)
    if (nums[mid] === target) {
      // 查找最左边的数
      if (lower) {
        if (mid === 0 || nums[mid - 1] !== target) {
          return mid
        } else {
          right--
        }
      } else {
        // 查找最右边的数
        if (mid === nums.length - 1 || nums[mid + 1] !== target) {
          return mid
        } else {
          left++
        }
      }
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return -1
}