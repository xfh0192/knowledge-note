/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums
  let len = nums.length
  let i = 0
  for (let j = i + 1; j < len; j++) {
      if (nums[i] !== nums[j]) {
        nums[i + 1] = nums[j]
        i++
      }
  }
  return i + 1
};

let a = [1,1,2]
console.log(removeDuplicates(a))
console.log(a)