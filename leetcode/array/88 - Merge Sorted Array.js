/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let last = m + n - 1
  for (; i >= 0 && j >= 0; last--) {
    if (nums1[i] > nums2[j]) {
      nums1[last] = nums1[i]
      i--
    } else {
      nums1[last] = nums2[j]
      j--
    }
  }
  for (; j >= 0; last--) {
    nums1[last] = nums2[j]
    j--
  }
};

let res = merge([0], 0, [1], 1)
console.log(res);