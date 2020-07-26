// https://mp.weixin.qq.com/s/ZIMuOvUJekiKx_UIvH1kjA

/**
 * 给定一个 n × n 的二维矩阵表示一个图像。 将图像顺时针旋转 90 度。
 * 
 * 示例 1:
  给定 matrix =
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ], 

  原地旋转输入矩阵，使其变为:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
 */

// ====

let matrix = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

// 第一轮循环，x相当于左边界位置，y相当于右边界位置，两边同时收缩。同时将x视为下限，y视为上限
for (let x = 0, y = matrix[0].length - 1; x < y; x++, y--) {
  // 第二轮循环，s相当于从下限递增数，y从上限递减数
  for (let s = x, e = y; s < y; s++, e--) {   // 注意这里条件是 s < y（而不是s < e）
    // 就第一轮讨论

    // 顺时针
    // var temp = matrix[x][s]
    // matrix[x][s] = matrix[e][x] // 左 -> 上
    // matrix[e][x] = matrix[y][e] // 下 -> 左
    // matrix[y][e] = matrix[s][y] // 右 -> 下
    // matrix[s][y] = temp // 上 -> 右

    // 逆时针
    var temp = matrix[x][s]
    matrix[x][s] = matrix[s][y]
    matrix[s][y] = matrix[y][e]
    matrix[y][e] = matrix[e][x]
    matrix[e][x] = temp
  }
}

matrix.forEach(row => {
  console.log(row.join(','))
})