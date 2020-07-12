// https://leetcode-cn.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

 /**
  * 
  * 先按intervals[i][0] 进行排序
    循环判断 intervals[i][1] >= intervals[i+1][0]
    符合条件删除 intervals[i+1]
    注：
    边界i<intervals.length-1
    因为删除元素，数组变短了。此时： i--
  */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length; i++) {
    let a2 = intervals[i][1]
    if (intervals[i+1]) {
      let b1 = intervals[i+1][0]
      let b2 = intervals[i+1][1]
      if (a2 >= b1) {
        intervals[i][1] = a2 > b2 ? a2 : b2
        intervals.splice(i + 1, 1)
        i--
      }
    }
  }
  return intervals
};