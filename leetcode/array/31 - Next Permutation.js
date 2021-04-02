/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = 0
  let j = 0
  // 1. 寻找最后的升序位置
  for (i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
          break
      }
  }
  if (i >= 0) {
      // 2. 在降序趋势中，寻找最后的比i小的数的位置
      for (j = nums.length - 1; j > i; j--) {
          if (nums[j] > nums[i]) {
              break
          }
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  // 3. 交换i和j后，将i后的数（必定降序）升序处理
  let left = i + 1
  let right = nums.length - 1
  while(left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
  }
  return nums
};