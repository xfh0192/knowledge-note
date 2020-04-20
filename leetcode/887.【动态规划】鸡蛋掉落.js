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
    while(left < right) {
        N = Math.ceil((right - left) / 2) + left
        // console.log(N)
        if (Math.abs(N - K) <= 1) {
            return n + 2
        }
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
console.log(superEggDrop(1,3))
// console.log(superEggDrop(2,6))
// console.log(superEggDrop(3,14))