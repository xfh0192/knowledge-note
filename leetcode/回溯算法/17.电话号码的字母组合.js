/**
 * @param {string} digits
 * @return {string[]}
 */

// 解法1
var letterCombinations = function(digits) {
    if (!digits) return []
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let res = []

    backtrack('', 0)
    return res

    function backtrack(str, d) {
        if (str.length === digits.length) {
            res.push(str)
            return
        }

        for (let i = 0; i < map[digits.charAt(d)].length; i++) {
            str = str + map[digits[d]][i]
            backtrack(str, d + 1)
            str = str.slice(0, str.length - 1)
        }
    }
};

// ====

// 解法2
var letterCombinations = function(digits) {
    if (!digits) return []
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let res = []

    backtrack('', digits)
    return res

    function backtrack(str, next_digits) {
        if (next_digits.length === 0) {
            res.push(str)
        } else {
            let letters = map[next_digits.slice(0, 1)]
            for (let i = 0; i < letters.length; i++) {
                backtrack(str + letters[i], next_digits.slice(1))
            }
        }
    }
};

console.log(letterCombinations('23'))