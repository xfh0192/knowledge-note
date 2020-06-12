/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
    candidates 中的数字可以无限制重复被选取。

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

var combinationSum = function(candidates, target) {
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
    let num = nums[i]

    // 不需要剪了。。从start开始就可以

    // 剪枝。假如当前数比父节点小，那么得到的组合必然是重复组合
    // if (num < nums[start]) {
    //   continue
    // }

    temp.push(num)
    backtrack(nums, res, temp, target, i)
    temp.pop()
  }
}

let a = [2,3,5]
let t = 8

let res = combinationSum(a, t)
console.log(res)