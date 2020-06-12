/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 官方解法3 -- 分割区域

var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false
  return search(matrix, 0, 0, matrix[0].length - 1, matrix.length - 1, target)
};

function search(matrix, left, top, right, bottom, target) {
  // 边界条件
  if (left > right || top > bottom) {
      return false
  } else if (target < matrix[top][left] || target > matrix[bottom][right]) {
      return false
  }
  
  // 此处以一维index作为x，二维index作为y
  // 取y的中间一列，进行比较
  let mid = left + Math.floor((right - left)/2)
  let x = top
  while(x <= bottom && matrix[x][mid] <= target) {
      if (matrix[x][mid] === target) return true
      x++
  }

  // 区分的x和y找到了，此时 matrix[x - 1][min] < matrix[x][min] < matrix[x + 1][min]
  // 此时左上角矩阵所有数比target小，右下角矩阵所有数比target大，直接排除
  // 继续搜寻左下和右上
  return search(matrix, left, x, mid, bottom, target) || 
          search(matrix, mid + 1, top, right, x - 1, target)
}