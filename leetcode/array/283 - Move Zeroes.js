/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0
  let j = 0
  let len = nums.length
  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
  console.log(nums)
};

let a = [0,1,0,3,12]
moveZeroes(a)