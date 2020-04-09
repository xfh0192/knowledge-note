/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    let cur = ''
    backtrack(cur, 0, 0)
    return ans

    function backtrack(cur, open, close) {
        if (cur.length === 2*n) {
            ans.push(cur)
            return
        }
        if (open < n) {
            // cur = cur + '('
            backtrack(cur + '(', open + 1, close)
            // cur.substr(0, cur.length - 1)
        }
        if (close < open) {
            // cur = cur + ')'
            backtrack(cur + ')', open, close + 1)
            // cur.substr(0, cur.length - 1)
        }
    }
};

console.log(generateParenthesis(3))

// ====

// var generateParenthesis = function (n) {
//     let res = [];
//     //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
//     const help = (cur, left, right) => {
//       if (cur.length === 2 * n) {
//         res.push(cur);
//         return;
//       }
//       if (left < n) {
//         help(cur + "(", left + 1, right)
//       }
//       if (right < left) {
//         help(cur + ")", left, right + 1);
//       }
//     };
//     help("", 0, 0);
//     return res;
//   };