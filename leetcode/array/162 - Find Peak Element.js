/**
 * @param {number[]} nums
 * @return {number}
 */
// 线性扫描
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
          return i
      }
  }
  return nums.length - 1
};

// 二分
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1
  while(left < right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] > nums[mid + 1]) {
      // 下降序列
      right = mid
    } else {
      // 上升序列
      left = mid + 1
    }
  }
  return left
}

let a = [1,2,3,1]
findPeakElement(a)