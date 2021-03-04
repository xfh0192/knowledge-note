// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// // 快排
// var sortColors = function(nums) {
//   quickSort(nums, 0, nums.length - 1)
// };

// function quickSort(nums, left, right) {
//   if (left < right) {
//     let partitionIndex = partition(nums, left, right)
//     quickSort(nums, left, partitionIndex - 1 > left ? partitionIndex - 1 : left)
//     quickSort(nums, partitionIndex + 1 < right ? partitionIndex + 1 : right, right)
//   }
// }

// function partition(nums, left, right) {
//   let pivotValue = nums[right]
//   let i = left
//   let j = left
//   for (; i < right; i++) {
//       if (nums[i] < pivotValue) {
//           [nums[i], nums[j]] = [nums[j], nums[i]]
//           j++
//       }
//   }
//   [nums[i], nums[j]] = [nums[j], nums[i]]
//   return j
// }

// let a = [2,0,2,1,1,0]
// sortColors(a)
// console.log(a);

// -----

// 双指针
var sortColors = function(nums) {
  let p0 = 0
  let p1 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]]
      // 假如 p0 === p1，则原地换两次等于没换
      if (p1 > p0) {
        [nums[p1], nums[i]] = [nums[i], nums[p1]]
      }
      p0++
      p1++
    } else if (nums[i] === 1) {
      [nums[p1], nums[i]] = [nums[i], nums[p1]]
      p1++
    }
  }
};

let a = [2,0,2,1,1,0]
sortColors(a)
console.log(a);