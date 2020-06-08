// 背包问题解析：https://segmentfault.com/a/1190000012829866

/**
 * 
 * @param {*} weights 
 * @param {*} values 
 * @param {*} W 容量
 */

 // 动态规划
function knapsack(weights, values, W) {
  // 物品数量
  let len = weights.length
  // 二维数组，结果表
  let f = [[]]
  
  // 求第一行（第一个物品）
  for (let i = 0; i <= W; i++) {
    if (i < weights[0]) {
      // 如果容量不够，不拿，价值为0
      f[0][i] = 0
    } else {
      // 否则，拿
      f[0][i] = values[0]
    }
  }

  for (let j = 0; j <= W; j++) {  // 注意，W也要计算
    for (let i = 1; i < len; i++) {
      // 创建新一行
      if (!f[i]) {
        f[i] = []
      }
      
      // 当前物品超出容量
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j]
      } else {
        // 没有超出
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
      }
    }
  }

  return f[len - 1][W]
}

let a = knapsack([2,2,6,5,4], [6,3,5,4,6], 10)
console.log(a)