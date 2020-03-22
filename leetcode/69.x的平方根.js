/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 暴力
    if (x === 0) return 0;
    let res = 1
    let i = 1
    while(res < x) {
        i++
        res = i*i
    }
    return res !== x ? i - 1 : i;
};

let a = 8
console.log(mySqrt(a))