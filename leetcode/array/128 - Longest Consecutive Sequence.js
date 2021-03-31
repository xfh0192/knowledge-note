/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let maxLen = 0
  for (const num of set) {
      if (!set.has(num - 1)) {
          let currentNum = num
          let currentMaxLen = 1
          while(set.has(currentNum + 1)) {
              currentNum++
              currentMaxLen++
          }
          maxLen = Math.max(maxLen, currentMaxLen)
      }
  }
  return maxLen
};