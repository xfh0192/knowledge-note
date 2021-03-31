/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Math.max(...prices)
  let max = 0
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      } else if (prices[i] - minPrice > max) {
          max = prices[i] - minPrice
      }
  }
  return max
};

let a = [1,2]
console.log(maxProfit(a));