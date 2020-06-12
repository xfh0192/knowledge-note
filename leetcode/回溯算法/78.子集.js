/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let tempList = []
  backtrack(nums, tempList, 0, res)
  return res
};

function backtrack(nums, tempList, depth, res) {
  for (let i = depth; i < nums.length; i++) {
    let num = nums[i]
    tempList.push(num)
    backtrack(nums, tempList, i + 1, res) // 注意这里是 i+1
    tempList.pop()
  }
  res.push(tempList.slice())
}

// ------

// 二进制掩码解法，强
let nums = [1,2,3]
let res = []
let resLength = Math.pow(2, nums.length)
for (let i = 0; i < resLength; i++) {
  let sub = []
  for (let j = 0; j < nums.length; j++) {
    if ( ((i >> j) & 1) === 1 ) {
      sub.push(nums[j])
    }
  }
  res.push(sub.slice())
}
return res