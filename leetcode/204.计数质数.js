/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  for (i = 2; i < n; i++) {
    if (isPrimes(i)) {
      count++
    }
  }
  return count
};

function isPrimes(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}