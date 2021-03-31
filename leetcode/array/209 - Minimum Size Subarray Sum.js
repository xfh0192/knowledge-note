/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
// https://www.zhihu.com/question/314669016
var minSubArrayLen = function(target, nums) {
  if (!nums.length) return 0
  let start = 0
  let end = 0
  let sum = 0
  let n = nums.length
  let minLen = nums.length + 1
  while(end < n) {
    sum += nums[end]
    while(sum >= target) {
      minLen = Math.min(minLen, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return minLen > nums.length ? 0 : minLen
};

let a = 15
let b = [1,2,3,4,5]
let res = minSubArrayLen(a,b)
console.log(res);