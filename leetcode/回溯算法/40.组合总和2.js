/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
    candidates 中的数字只能用一次。

  说明：
    所有数字（包括 target）都是正整数。
    解集不能包含重复的组合。 

 */

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 回溯 剪枝

var combinationSum2 = function(candidates, target) {
  let nums = candidates.slice().sort((a,b) => a - b)
  let res = []
  let temp = []
  backtrack(nums, res, temp, target, 0)
  return res
};

function backtrack(nums, res, temp, target, start = 0) {
  let sum = temp.reduce((prev, next) => prev += next, 0)
  if (sum === target) {
    res.push(temp.slice())
    return;
  } else if (sum > target) {
    return
  }

  for (let i = start; i < nums.length; i++) {
    // 【关键】剪枝。当前元素跟上一个一样，直接减掉
    if (i > start && nums[i] === nums[i - 1]) {
      continue
    }
    let num = nums[i]
    temp.push(num)
    backtrack(nums, res, temp, target, i + 1)
    temp.pop()
  }
}

let a = [2,3,5]
a = [1,1,2,5,6,7,10]
let t = 8

let res = combinationSum2(a, t)
console.log(res)