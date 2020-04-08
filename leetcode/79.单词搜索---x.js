/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     let height = board.length;
//     let width = board[0].length;
//     let firstChar = word[0];

//     for(let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             if (board[i][j] === firstChar) {
//                 console.log(i,j)
//                 if (_exist(board, word, i, j, 1)) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false
// }

// function _exist(board, word, i, j, tin = 1) {
//     let height = board.length;
//     let width = board[0].length;
//     let target = word[tin];

//     // 全部找到
//     if (word.length === tin) return true;

//     // 四个方向搜索
//     if (j > 1 && board[i][j - 1] === target) {
//         return _exist(board, word, i, j-1, tin+1)
//     } else if (j < width && board[i][j + 1] === target) {
//         return _exist(board, word, i, j+1, tin+1)
//     } else if (i > 1 && board[i - 1][j] === target) {
//         return _exist(board, word, i-1, j, tin+1)
//     } else if (i < height && board[i + 1][j] === target) {
//         return _exist(board, word, i+1, j, tin+1)
//     } 
//     return false;
// }

// // 某一个单元格搜索周围4个方向字母
// function searchChar(i, j, target) {
//     if (j > 1 && board[i][j - 1] === target) {
//         return {
//             direction: 'left',
//             result: board[i][j - 1],
//         };
//     } else if (j < width && board[i][j + 1] === target) {
//         return {
//             direction: 'right',
//             result: board[i][j + 1]
//         }
//     } else if (i > 1 && board[i - 1][j] === target) {
//         return {
//             direction: 'top',
//             result: board[i - 1][j]
//         }
//     } else if (i < height && board[i + 1][j] === target) {
//         return {
//             direction: 'bottom',
//             result: board[i + 1][j]
//         }
//     } else {
//         return false;
//     }
// }

// // let board = [
// //   ['A','B','C','E'],
// //   ['S','F','C','S'],
// //   ['A','D','E','E']
// // ]
// // let word = 'ABCCED';
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// let word = "ABCB"
// let a = exist(board, word)

// console.log(a)

// 以上作废
// ====

var exist = function(board, word) {
    let height = board.length;
    let width = board[0].length;
    let depth = 0

    // 记录板
    let mark = []
    for (let i = 0; i < height; i++) {
        mark[i] = []
    }

    // 遍历
    for(let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (backtrack(i, j, depth)) {
                return true
            }
        }
    }
    return false

    // 搜寻、回溯
    function backtrack(x, y, d) {
        // 搜寻的边界条件
        if (d === word.length) {
            return true
        }

        let res = false
        // 在单词板边界内、字母相等、且未使用
        if (
            x >= 0 &&
            x < height &&
            y >= 0 &&
            y < width &&
            board[x][y] === word[d] &&
            !mark[x][y]
        ) {
            d++
            mark[x][y] = true
            res =   backtrack(x - 1, y, d) ||
                    backtrack(x + 1, y, d) ||
                    backtrack(x, y - 1, d) || 
                    backtrack(x, y + 1, d)
            if (!res) {
                d--
                mark[x][y] = false
            }
        }
        return res
    }
}

let board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]
let word = 'ABCCED'
console.log(exist(board, word))