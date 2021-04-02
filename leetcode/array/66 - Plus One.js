/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[0] === 0) return [1]
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
      digits[i]++
      digits[i] = digits[i] % 10
      // 末位不为0，则不需要进位，直接return
      if (digits[i] !== 0) {
          return digits
      }
  }
  // 未return，表示最高位进位了，需要额外处理
  digits = [1, ...digits]
  return digits
};