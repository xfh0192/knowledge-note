/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 位运算
var subsets = function(nums) {
  let res = []
  let n = nums.length
  let count = 1 << n
  for (let mask = 0; mask < count; mask++) {
    let temp = []
    for (let i = 0; i < nums.length; i++) {
      if (mask & (1 << i)) {
        temp.push(nums[i])
      }
    }
    res.push(temp)
  }
  return res
};

let a = [1,2,3]
console.log(subsets(a));

// -----

// 回溯
var subsets = function(nums) {
  let res = []
  dfs(nums, res, [], 0)
  return res
}

function dfs(nums, res, temp = [], start) {
  for (let i = start; i < nums.length; i++) {
    temp.push(nums[i])
    dfs(nums, res, temp, i + 1)
    temp.pop()
  }
  res.push(temp.slice())
}
let a = [1,2,3]
console.log(subsets(a));
