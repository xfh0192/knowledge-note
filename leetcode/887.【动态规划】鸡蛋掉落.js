/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

// 未做出来
var superEggDrop = function(K, N) {
    if (N === 1) return 1
    let left = 1
    let right = N
    let n = 0
    while(right - left !== 0) {
        N = parseInt((left + right - 1) / 2)
        if (N > K) {
            right = N
        } else {
            left = N
        }
        n++
    }
    return n
};

// console.log(superEggDrop(1,2))
console.log(superEggDrop(2,6))
console.log(superEggDrop(3,14))