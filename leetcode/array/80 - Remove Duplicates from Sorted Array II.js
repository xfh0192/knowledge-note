/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) return 0
  let count = 1
  let j = 0
  let i = 1
  for (; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        count++
        if (count > 2) {
          nums.splice(i, 1)
          i--
          j--
        }
      } else {
          count = 1
      }
      j++
  }
  return j + 1
};

// let a = [1,1,1,2,2,3]
// removeDuplicates(a)

let a = [0,0,1,1,1,1,2,3,3]
removeDuplicates(a) // [0,0,1,1,2,3,3]