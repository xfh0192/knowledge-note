/**
 * @description 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。
    输入: [1,2,2]
    输出:
    [
      [2],
      [1],
      [1,2,2],
      [2,2],
      [1,2],
      []
    ]
 * @param {number[]} nums
 * @return {number[][]}
 */

// 回溯，需要剪枝
// https://leetcode-cn.com/problems/subsets-ii/solution/90-zi-ji-ii-by-alexer-660/

var subsetsWithDup = function(nums) {
  let res = []
  let tempList = []
  let ns = nums.slice().sort((a,b) => a - b)
  backtrack(ns, tempList, 0, res)
  return res
};

function backtrack(nums, tempList, depth, res) {
  for (let i = depth; i < nums.length; i++) {
    // 同层元素，且等于上一个元素 => 说明当前元素在当前层已出现过，需要剪枝
    if (i > depth && nums[i] === nums[i - 1]) {
      continue
    }
    let num = nums[i]
    tempList.push(num)
    backtrack(nums, tempList, i + 1, res)
    tempList.pop()
  }
  res.push(tempList.slice())
}

subsetsWithDup([1,2,2])