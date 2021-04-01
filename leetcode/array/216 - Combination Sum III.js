/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 回溯
var combinationSum3 = function(k, n) {
  let res = []
  let temp = []
  dfs(1, 9, k, n, temp, res)
  return res
};

function dfs(cur, n, k, sum, temp, res) {
  if (temp.length === k && temp.reduce((prev, next) => prev + next, 0) === sum) {
    res.push(temp.slice())
    return
  }
  // temp元素太多 或 temp元素数量+剩下可用元素数量 < k （元素不足）
  if (temp.length > k || temp.length + (n - cur + 1) < k) {
    return
  }
  temp.push(cur)
  dfs(cur + 1, n, k, sum, temp, res)
  temp.pop()
  // 不像遍历，这一步是计算没有cur的情况
  dfs(cur + 1, n, k, sum, temp, res)
}

// ======

// 二进制（子集枚举）
var combinationSum3 = function(k, n) {
  let temp = []
  let res = []
  for (let mask = 0; mask < (1 << 9); mask++) {
    if (check(mask)) {
      res.push(temp.slice())
    }
  }
  return res

  function check(mask) {
    temp = []
    for (let i = 0; i < 9; i++) {
      if ((1 << i) & mask) {
        temp.push(i + 1)
      }
    }
    return temp.length === k && temp.reduce((prev, next) => prev + next, 0) === n
  }
};

let a = 3
let b = 7
combinationSum3(a,b)