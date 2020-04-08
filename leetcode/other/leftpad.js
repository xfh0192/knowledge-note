// 补齐
function leftpad(str, length, ch) {
    if (!ch && ch !== 0) {
        ch = ' '
    }
    let len = length - str.length
    return ch + Array(len).join(ch) + str
}
console.log(leftpad('hello', 10, 0))


// 二分法
// 0 拼接20次
// 00000000 + 00000000 + 00000000

function leftpad(str, length, ch) {
    let len = str.length - length
    // 二分法
    let total = ''
    while(true) {
        if (len % 2 === 1) {
            total += ch
        }
        if (len === 1) {
            return total + str
        }
        ch += ch
        len = Number.parseInt(len / 2, 10)
    }
}
console.log(leftpad('hello', 10, 0))


// 位运算
/**
 * 一个数字除以2 余1
 * len%2 === 1
 * 按位与: & 两个二进制 按位置进行&
 * 101 // 5
 * 001 // 1
 * 
 * 101 & 001 == 001
 * 001
 * 
 * len%2 == 1 奇数。就是按位与 len & 1
 * 
 * 4>>1 2 4右移1位 等于除以2
 * 4>>2 1
 * 5>>2 1
 * 10<<2 40
 * 10<<1 20
 * 5>>2 1
 */
function leftpad(str, length, ch) {
    let len = length - str.length
    let total = ''
    while(len) {
        if (len & 1) {
            total += ch
        }
        if (len === 1) {
            return total + str
        }
        ch += ch
        len = len>>1
        
    }
}