/**
 * @param {number} n
 * @return {string[][]}
 */
let res = []
var solveNQueens = function(n) {
    let board = []
    for (let i = 0; i < n; i++) {
        // board.push('.'.repeat(n))
        board.push(new Array(n).fill('.'))
    }
    backtrack(board, 0)
    return res
};

function backtrack(board, row) {
    if (row === board.length) {
        let temp = []
        for (let i = 0; i < board.length; i++) {
            temp[i] = board[i].join('')
        }
        return res.push(temp)
    }
    
    let len = board[row].length     // 列数
    for (let i = 0; i < len; i++) {
        if (!isValid(board, row, i)) continue
        // 有效
        board[row][i] = 'Q'
        backtrack(board, row + 1)
        board[row][i] = '.'
    }
}

/* 是否可以在 board[row][col] 放置皇后？ */
function isValid(board, row, col) {
    let len = board.length  // 行数
    // 检查当前列上是否有Q
    for (let i = 0; i < len; i++) {
        if (board[i][col] === 'Q') {
            return false
        }
    }

    // 检查左上角对角线
    for (
        let i = row - 1, j = col - 1; 
        i >= 0 && j >= 0;
        i--, j--
    ) {
        if (board[i][j] === 'Q') {
            return false
        }
    }

    // 检查右上角对角线
    for (
        let i = row - 1, j = col + 1;
        i >= 0 && j < board[i].length;
        i--, j++
    ) {
        if (board[i][j] === 'Q') {
            return false
        }
    }
    return true
}

console.log(JSON.stringify(solveNQueens(1)))

// ======

var solveNQueens = function(n) {
    let result = new Array(n);
    let results = [];
    // 回溯排除
    // 判断 row 行 column 列放置是否合适
    let dfs = (row,column) => {
        let leftColumn =  column-1;
        let rightColumn = column+1;
        // 逐上判断每一行是否能放棋子
        for(let i = row - 1;i >= 0;i--){
             // 第i行第column列是否有棋子【上一行同一列不能有棋子】
            if(result[i] == column){
                return false;
            }
            // 当左列存在 && 考虑左上对角线【递减斜向上】 第i行第leftColumn列是否有棋子
            if(leftColumn >= 0 && result[i] == leftColumn){
                return false;
            }
            // 当右列存在 && 考虑右上对角线【递减斜向上】 第i行第rightColumn列是否有棋子
            if(rightColumn < n && result[i] == rightColumn){
                return false;
            }
            leftColumn--;
            rightColumn++;
        }
        return true;
    }
    // 格式化数据格式
    let format = (result) => {
        let tmpResult = [];
        for(let i = 0;i < n;i++){
            let str = '';
            for(let j = 0;j < n;j++){
                if(result[i] == j){
                    str+='Q';
                }else{
                    str+='.';
                }
            }
            tmpResult.push(str);
        }
        return tmpResult;
    }
    // 开始搜索
    let Nqueens = (row) => {
        // 排除到最后一行，即当前所有行均排查过，
        // 意味着找到了一个解
        if(row == n){
            results.push(format(result));
            return;
        }
        for(let j = 0;j < n;j++){
            if(dfs(row,j)){
                result[row] = j;
                Nqueens(row+1)
            }
        }
    }
    // 从第一行开始搜索
    Nqueens(0);
    return results;
};