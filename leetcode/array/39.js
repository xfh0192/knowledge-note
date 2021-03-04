/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (candidates.length === 0) return []
  let res = []
  candidates = candidates.sort((a,b) => a - b)
  backtrack(candidates, target, 0, res, [])
  return res
};

function backtrack(nums, target, left, res, temp) {
  if (target === 0) {
    res.push(temp.slice())
    return
  }
  if (target < 0) {
    return
  }

  for (let i = left; i < nums.length; i++) {
    temp.push(nums[i])
    backtrack(nums, target - nums[i], i, res, temp)
    temp.pop()
  }
}

let a = [2,3,6,7]
let b = 7
console.log(combinationSum(a, b));