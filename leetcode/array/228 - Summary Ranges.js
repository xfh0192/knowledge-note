/**
 * @param {number[]} nums
 * @return {string[]}
 */
// 复杂了
var summaryRanges = function(nums) {
  if (!nums.length) return []
  let ranges = [[nums[0], nums[0]]]
  for (let i = 1; i < nums.length; i++) {
    let lastRange = ranges[ranges.length - 1]
    if (lastRange[1] + 1 === nums[i]) {
      lastRange[1] = nums[i]
    } else {
      ranges.push([nums[i], nums[i]])
    }
  }

  let res = []
  for (let i = 0; i < ranges.length; i++) {
    let range = ranges[i]
    if (range[0] !== range[1]) {
      res.push(`${range[0]}->${range[1]}`)
    } else {
      res.push(`${range[0]}`)
    }
  }
  return res
};

// 答案
var summaryRanges = function(nums) {
  let len = nums.length
  let i = 0
  let res = []
  while(i < len) {
    let low = i
    i++
    while(i < len && nums[i] === nums[i - 1] + 1) {
      i++
    }
    let high = i - 1
    let temp = [nums[low]]
    if (low < high) {
      temp.push('->')
      temp.push(nums[high])
    }
    res.push(temp.join(''))
  }
  return res
}

let a = [0,1,2,4,5,7]
summaryRanges(a)