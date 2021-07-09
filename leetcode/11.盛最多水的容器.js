/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    let t = right - left
    let leftHeight = height[left]
    let rightHeight = height[right]
    let tempRes = t * Math.min(leftHeight, rightHeight)
    res = Math.max(res, tempRes)
    if (leftHeight < rightHeight) {
      left++
    } else {
      right--
    }
  }

  return res
};

// ====

var maxArea = function(height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let width = right - left
    let h = Math.min(height[left], height[right])
    max = Math.max(max, h * width)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}