/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights.length) return 0
  if (heights.length === 1) return heights[0]
  heights = heights.slice()
  heights.push(0)
  heights.unshift(0)
  let stack = [0]
  let max = 0
  for (let i = 1; i < heights.length; i++) {
      if (heights[i] > heights[stack[stack.length - 1]]) {
          // stack.push(i)
      } else {
          while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
              let h = heights[stack.pop()]
              let w = i - stack[stack.length - 1] - 1
              max = Math.max(max, h * w)
          }
      }
      stack.push(i)
  }
  return max
};

let a = [2,1,5,6,2,3]
let res = largestRectangleArea(a)
console.log(res); // 10
