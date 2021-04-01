/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1. map
// 2. 排序
var containsDuplicate = function(nums) {
  quickSort(nums, 0, nums.length - 1)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
};

// 快排
function quickSort(nums, left, right) {
  if (left < right) {
    let pivotIndex = findPivot(nums, left, right)
    quickSort(nums, left, pivotIndex - 1 < left ? left : pivotIndex - 1)
    quickSort(nums, pivotIndex + 1 > right ? right : pivotIndex + 1, right)
  }
}

function findPivot(nums, left, right) {
  let pivotValue = nums[right]
  let i = left
  while(left < right) {
    if (nums[left] < pivotValue) {
      [nums[left], nums[i]] = [nums[i], nums[left]]
      i++
    }
    left++
  }
  [nums[i], nums[right]] = [nums[right], nums[i]]
  return i
}

let a = [1,2,3,4,3,2,1,2,7]
containsDuplicate(a)