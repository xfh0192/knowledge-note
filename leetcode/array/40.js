/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) return []
  let res = []
  candidates = candidates.sort((a,b) => a - b)
  backtrack(candidates, res, target, 0, [])
  return res
};

function backtrack(nums, res, target, left = 0, temp) {
  if (target === 0) {
    res.push(temp.slice())
    return
  }
  if (target < 0) {
    return
  }
  for (let i = left; i < nums.length; i++) {
    // 剪枝
    if (i > left && nums[i] === nums[i - 1]) {
      continue
    }
    temp.push(nums[i])
    backtrack(nums, res, target - nums[i], i + 1, temp)
    temp.pop()
  }
}