/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * 
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 *  输入: [1,1,2]
    输出:
    [
      [1,1,2],
      [1,2,1],
      [2,1,1]
    ]
 */

 // 可参考
 // > https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let list = nums.slice().sort((a,b) => a - b)
  let temp = []
  let res = []
  let hash = {} // 用于记录已使用index
  backtrack(list, temp, res, hash, 0)
  return res
};

function backtrack(nums, temp, res, hash, depth) {
  if (temp.length === nums.length) {
    res.push(temp.slice())
    return
  }
  for (let i = 0; i < nums.length; i++) {
    // 当前元素已使用 || (上一个元素未使用 && 当前元素=上一个元素):不允许跳过元素，否则会出现重复
    // i > 0 保证nums[i - 1] 有意义
    if (hash[i] || (i > 0 && !hash[i - 1] && nums[i] === nums[i - 1])) {
      continue
    }
    let num = nums[i]
    temp.push(num)
    hash[i] = true
    backtrack(nums, temp, res, hash, depth + 1)
    temp.pop()
    hash[i] = false
  }
}

let nums = [1,1,2]
let res = permuteUnique(nums)
console.log(res)