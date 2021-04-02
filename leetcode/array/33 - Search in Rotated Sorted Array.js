/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1
  // 二分找target
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
      let mid = left + ((right - left) >>> 1)
      console.log(mid);
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] >= nums[left]) {
          // 此时左边部分升序
          if (nums[left] <= target && nums[mid] >= target) {
              right = mid - 1
          } else {
              left = mid + 1
          }
      } else if (nums[mid] < nums[right]) {
          // 此时右边部分升序
          if (nums[mid] <= target && nums[right] >= target) {
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
  return -1
};

let a = [4,5,6,7,0,1,2]
let b = 0
console.log(search(a, b));