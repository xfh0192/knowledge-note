// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//   quickSort(nums, 0, nums.length - 1)
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i++]) {
//       return true
//     }
//   }
//   return false
// }

// function quickSort(nums, left, right) {
//   let pivotIndex = findPivotIndex(nums, left, right)
//   // quickSort(nums, left > 0 ? left + 1 : 0, right - 1)
//   // quickSort(nums, right < nums.length ? right - 1 : nums.length - 1)
// }

// function findPivotIndex(nums, left, right) {
//   let pivotValue = nums[right]
//   let i = left
//   while(left < right) {
//     if (nums[left] < pivotValue) {
//       [nums[left], nums[i]] = [nums[i], nums[left]]
//       i++
//     }
//     left++
//   }
// }