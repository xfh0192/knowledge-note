/**
 * @param {string} s
 * @return {string}
 */
// 直接解答
var reverseWords = function(s) {
    let temp = s.trim().split(' ').reverse()
    let res = ''
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '') continue
        res = res + temp[i] + ' '
    }
    return res.substring(0, res.length - 1)
};

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

// ==== 完全手写 ====

var reverseWords = function(s) {
    let i = 0    
    let stack = []
    let temp = ''
    while(i <= s.length) {
        if (s[i] && s[i] !== ' ') {
            temp += s[i]
        } else if (temp.length !== 0) {
            stack.unshift(temp)
            temp = ''
        }
        i++
    }
    return stack.join(' ')
}

// ====

function trimSpaces(s) {
    let left = 0, right = s.length - 1

    // 去除字符串开头的空白字符
    while(left <= right) {
        if (s.charAt(left) === ' ') left++
        else break
    }

    // 去除字符串末尾的空白字符
    while(left <= right) {
        if (s.charAt(right) === ' ') right--
        else break
    }

    // 将字符串间多余的空白字符去除
    let res = ''
    while(left <= right) {
        if (s.charAt(left) !== ' ') res += s[left]
        else if (res[res.length - 1] !== ' ') res += s[left]
        left++
    }
    return res;
}

function reverse(s, left, right) {
    // js中无法直接修改字符串中某字符，需要转为数组处理
    let s = s.split('')
    while(left <= right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
    }
    return s.join('')
}

function reverseEachWord(s) {
    let start = 0, end = 0
    let s = s.split(' ')
    let stack = []

    while(start < s.length) {
        // 循环至单词末尾
        while(end < n && s[end] !== ' ') {
            end++
        }

        // 翻转单词
        let word = reverse(s.slice(start, end))
        stack.push(word)
        
        // 更新start，寻找下一个单词
        start = end + 1
        end++
    }
    return s.join(' ')
}

// 执行函数
var reverseWords = function(s) {
    s = trimSpaces(s)
    s = reverse(s)
    s = reverseEachWord(s)
    return s
}

console.log(trimSpaces("a good   example"))

// console.log(reverseWords("a good   example"))