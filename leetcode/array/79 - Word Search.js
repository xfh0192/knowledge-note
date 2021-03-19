/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let h = board.length
  let w = board[0].length
  let visited = new Array(h)
  for (let i = 0; i < visited.length; i++) {
      visited[i] = new Array(w).fill(false)
  }
  for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
          if (searchWord(board, visited, word, i, j, 0)) {
              return true
          }
      }
  }
  return false
};

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]
function searchWord(board, visited, word, i, j, index) {
  if (index === word.length - 1) {
      return board[i][j] === word[index]
  }
  if (board[i][j] === word[index]) {
      visited[i][j] = true
      for (let plus = 0; plus < dir.length; plus++) {
          let d = dir[plus]
          let tempI = i + d[0]
          let tempJ = j + d[1]
          if (
              tempI >= 0 && tempI < board.length &&
              tempJ >= 0 && tempJ < board[0].length &&
              !visited[tempI][tempJ] &&
              searchWord(board, visited, word, tempI, tempJ, index + 1)
          ) {
              return true
          }
      }
      visited[i][j] = false
  }
  return false
}