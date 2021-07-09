/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let markBoard = {
    rows: new Array(9).fill(),
    columns: new Array(9).fill(),
    boxes: new Array(9).fill()
  }
  for (let i = 0; i < 9; i++) {
    markBoard.rows[i] = {}
    markBoard.columns[i] = {}
    markBoard.boxes[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num !== '.') {
        n = parseInt(num, 10)
        boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

        if (
          markBoard.rows[i][n] ||
          markBoard.columns[j][n] ||
          markBoard.boxes[boxIndex][n]
        ) {
          return false
        }

        markBoard.rows[i][n] = true
        markBoard.columns[j][n] = true
        markBoard.boxes[boxIndex][n] = true
      }
    }
  }

  return true
};

var b =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

var res =isValidSudoku(b)
console.log(res)