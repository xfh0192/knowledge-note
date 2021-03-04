/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let pos = nums.length
//   while(left <= right) {
//       let mid = left + ((right - left) >>> 1)
//       if (target <= nums[mid]) {
//           pos = mid
//           right = mid - 1
//       } else {
//           left = mid + 1
//       }
//   }
//   return pos
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let pos = 0
  while (left <= right) {
    let mid = left + ((right - left) >>> 1)
    if (target > nums[mid]) {
      if (mid === nums.length - 1 || target <= nums[mid + 1]) {
        return mid + 1
      }
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return pos
}

// let a = [1,3,5,7]
// let b = 8
let a = [1,3,5,6]
let b = 5
console.log(searchInsert(a, b));