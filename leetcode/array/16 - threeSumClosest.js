/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return 0
  nums = nums.sort((a,b) => a - b)
  let res = 0
  let left = 1
  let right = nums.length - 1
  let distance = Math.abs(nums[0] + nums[1] + nums[2] - target)
  for(let i = 0; i < nums.length; i++) {
      left = i + 1
      right = nums.length - 1
      while(left < right) {
          let sum = nums[i] + nums[left] + nums[right]
          if (sum === target) {
              return sum
          }
          if (Math.abs(sum - target) <= Math.abs(distance)) {
              distance = Math.abs(sum - target)
              res = sum
          }
          if (sum > target) {
              right--
          } else {
              left++
          }
      }
  }
  return res
};

console.log(threeSumClosest([-1,1,2,-4], 1))
console.log(threeSumClosest([0,1,2], 0))
console.log(threeSumClosest([1,1,1,1,], -100))