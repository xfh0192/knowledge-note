/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  nums = nums.sort((a,b) => a - b)
  let res = []
  let len = nums.length
  for (let i = 0; i < len - 3; i++) {
    // 当前轮循环内出现重复数，跳过当前轮。 i>0 用于跳过第一个数的检查
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // 当前轮循环中最小和过大，不需要继续计算
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break
    }
    // 当前轮循环最大和过小，跳过当前轮
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue
    }
    for(let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      // 当前轮循环中最小和过大，不需要继续计算
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break
      }
      // 当前轮循环最大和过小，跳过当前轮
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue
      }
      let left = j + 1
      let right = len - 1
      while(left < right) {
          let sum = nums[i] + nums[j] + nums[left] + nums[right]
          if (sum === target) {
            res.push([nums[i], nums[j], nums[left], nums[right]])
            while(left < right && nums[left] === nums[left + 1]) {
              left++
            }
            while(left < right && nums[right] === nums[right - 1]) {
              right--
            }
            left++
            right--
          } else if (sum > target) {
            right--
          } else {
            left++
          }
      }
    }
  }
  return res
};

// let arg1 = [0,0,0,0]
// let arg2 = 1
// let arg1 = [-2,-1,-1,1,1,2,2]
// let arg2 = 0
let arg1 = [-1,0,1,2,-1,-4] // -4 -1 -1 0 1 2
let arg2 = -1

console.log(fourSum(arg1, arg2))