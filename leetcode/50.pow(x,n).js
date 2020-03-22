/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // // 暴力
    // if (n < 0) {
    //     x = 1/x;
    //     n = -n
    // }
    // let temp = 1;
    // for(let i = 0; i < n; i++) {
    //     temp = temp*x
    // }
    // return temp;
    
    // 递归
    if (n < 0) {
        x = 1/x
        n = -n
    }
    function halfPow(x, n) {
        if (n === 0) return 1;

        let temp = halfPow(x, Math.floor(n/2));  // 这步有参考其他答案。。
        // 偶数幂
        if (n % 2 === 0) {
            return temp*temp;
        } else {
            // 奇数幂
            return temp*temp*x;
        }
    }
    return halfPow(x, n);
};

console.log(myPow(34.00515, -3))