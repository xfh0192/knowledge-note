// https://leetcode-cn.com/problems/coin-change/

/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 输入: coins = [1, 2, 5], amount = 11
    输出: 3 
    解释: 11 = 5 + 5 + 1
 */

/**
 *  f(n) = f(n - lastCoin) + 1  n=总价
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount < 0) return -1
  if (amount === 0) return 0
  
  // coins = coins.sort((a,b) => a - b)
  let dp = [0]
  for (let i = 1; i <= amount; i++) {
    dp[i] = Infinity
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  let res = isFinite(dp[amount]) ? dp[amount] : -1
  return res
};

let a = [1,2,5]
let t = 11 // 3

// a = [2]
// t = 3 // -1

a = [186,419,83,408]
t = 6249 // 20

coinChange(a,t)