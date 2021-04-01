/**
 * @param {number[]} nums
 * @return {number}
 */
// 数学
var missingNumber = function(nums) {
  let n = nums.length
  let sum = 0 // 0到n的和
  let numsSum = 0 // nums的和
  for (let i = 0; i < n; i++) {
    numsSum += nums[i]
    sum += i
  }
  sum += n
  let res = sum - numsSum
  return res
};

// 异或
var missingNumber = function(nums) {
  let res = 0
  let i = 0
  for (i = 0; i < nums.length; i++) {
    res = res ^ nums[i] ^ i
  }
  res =  res ^ i
  return res
}

let a = [9,6,4,2,3,5,7,0,1]
missingNumber(a)