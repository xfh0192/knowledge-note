// https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode/

/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
    注意：给定 n 是一个正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * @description 动态规划
 *  状态转移方程：f(n) = f(n - 1) + f(n - 2)
 *    因为到达某一阶，只能从上一阶+1，或从上上阶+2，因此方法数为f(n-1) + f(n-2)
 */

var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let arr = [1,2]
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n - 1]
};