/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 使用额外空间
var rotate = function(nums, k) {
  let res = new Array(nums.length).fill(0)
  let len = nums.length
  for (let i = 0; i < len; i++) {
      res[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < len; i++) {
      nums[i] = res[i]
  }
  console.log(nums);
};

// 翻转
var rotate = function(nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  console.log(nums);
}

function reverse(nums, left, right) {
  while(left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}

let a = [1,2,3,4,5,6,7]
let b = 3

// a = [-1,-100,3,99]
// b = 2
rotate(a,b)