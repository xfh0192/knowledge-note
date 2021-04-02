/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  let res = []
  let i = 0
  while(i < intervals.length && intervals[i][1] < newInterval[0]) {
      res.push(intervals[i])
      i++
  }

  let left = newInterval[0]
  let right = newInterval[1]
  while(i < intervals.length && intervals[i][0] <= right) {
      left = Math.min(left, intervals[i][0])
      right = Math.max(right, intervals[i][1])
      i++
  }
  res.push([left, right])

  while(i < intervals.length) {
      res.push(intervals[i])
      i++
  }

  return res
};