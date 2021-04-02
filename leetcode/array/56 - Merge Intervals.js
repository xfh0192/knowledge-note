/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a,b) => a[0] - b[0])
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
      let last = res[res.length - 1]
      let temp = intervals[i]
      if (temp[0] > last[1]) {
          res.push(temp)
      } else {
          last[1] = Math.max(last[1], temp[1])
      }
  }
  return res
};