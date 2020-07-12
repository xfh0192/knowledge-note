// https://leetcode-cn.com/problems/coin-change-2/

/**
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
 * 
 * 输入: amount = 5, coins = [1, 2, 5]
    输出: 4
    解释: 有四种方式可以凑成总金额:
    5=5
    5=2+2+1
    5=2+1+1+1
    5=1+1+1+1+1

    输入: amount = 3, coins = [2]
    输出: 0
    解释: 只用面额2的硬币不能凑成总金额3。

    输入: amount = 10, coins = [10] 
    输出: 1

    注意:
      你可以假设：
      0 <= amount (总金额) <= 5000
      1 <= coin (硬币面额) <= 5000
      硬币种类不超过 500 种
      结果符合 32 位符号整数
 */

 /**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/**
 * 动态规划。填表（遍历价值、硬币数），每一个价值的方法数，都等于未加当前硬币时的方法数+(当前价值-新硬币价值)的方法数
 *  
 *  coins=[2,3,5] amount=11 表中的值是方案数
 * 
 *  coin \ amount | 0 1 2 3 4 5 6 7 8 9 10
 *  0             | 1 0 0 0 0 0 0 0 0 0 0   // 没有硬币
 *  2             | 1 0 1 0 1 0 1 0 1 0 1   // dp递推到这一行
 *  2,3           | 1 0 1 1 1 1 2 1 2 2 2   // 这一行比如 dp[8] = dp[8] + dp[8-3]
 *                                             第一个dp[8]是上一行的结果，即只有硬币2的时候dp[8]的方法数
 *                                             第二个dp[8-3]是表示当前行中，dp[8-3（新加的硬币价值）] = dp[5]。
 *                                                即凑出5的方法数，每一种方法加价值3的硬币都能成为dp[8]的方法
 * 
 * 方案：每一行会依赖上一行的dp，因此用滚轮方法，每一行的结果覆盖到dp上，就只会有一维数组了
 */

var change = function(amount, coins) {
  if (amount < 0) return 0

  // 0块钱，只有不凑硬币一种方法
  // 第一行：没有硬币
  let dp = [1].concat(new Array(amount).fill(0))

  // 开始填表
  for (let i = 0; i < coins.length; i++) {

    // 这轮遍历从coins[i]开始，因为小于coins[i]的结果是不会变的
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j] + dp[j - coins[i]]
    }
  }
  let result = dp[amount]
  return result
};

let c = [1, 2, 5]
let a = 5 // 4

// c = [2]
// a = 3   // 0

// c = [10]
// a = 10  // 1

change(a, c)