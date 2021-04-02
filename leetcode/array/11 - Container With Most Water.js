/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height.length) return 0
  let left = 0
  let right = height.length - 1
  let max = 0
  while(left < right) {
      let width = right - left
      let high = Math.min(height[left], height[right])

      let tempMax = width * high
      max = Math.max(max, tempMax)

      if (height[left] < height[right]) {
          left++
      } else {
          right--
      }
  }
  return max
};