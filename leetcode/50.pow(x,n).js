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
    
//     // 递归
//     if (n < 0) {
//         x = 1/x
//         n = -n
//     }
//     function halfPow(x, n) {
//         if (n === 0) return 1;

//         let temp = halfPow(x, Math.floor(n/2));  // 这步有参考其他答案。。
//         // 偶数幂
//         if (n % 2 === 0) {
//             return temp*temp;
//         } else {
//             // 奇数幂
//             return temp*temp*x;
//         }
//     }
//     return halfPow(x, n);
};

console.log(myPow(34.00515, -3))

// ===
var myPow = function(x, n) {
    if (n < 0) {
        x = 1/x
        n = -n
    }
    return halfPow(x, n)
}

function halfPow (x, n) {
    if (n === 0) return 1
    if (n % 2 === 0) {
        // 偶数
        return myPow(x*x, Math.floor(n / 2))
    } else {
        // 奇数
        return myPow(x*x, Math.floor(n / 2)) * x
    }
}

console.log(myPow(2, 10))

// ====

var myPow = function(x, n) {
    if (n < 0) {
        x = 1/x
        n = -n
    }
    return halfPow(x, n)
}

function halfPow (x, n) {
    if (n === 0) return 1
    if (n & 1) {
        // 奇数
        return myPow(x*x, Math.floor(n / 2)) * x
    } else {
        // 偶数
        return myPow(x*x, n / 2)
    }
}

// ====
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    if (n === 0) {
        return 1
    }
    if (n % 2 === 0) {
        return myPow(x * x, n / 2)
    } else {
        return myPow(x * x, Math.floor(n / 2)) * x
    }
};

// 迭代
var myPow1 = function(x, n) {
    if (n < 0) {
        x = 1/x
        n = -n
    }

    let res = 1
    while(n) {
        if (n & 1) res = res * x
        x = x * x
        // n = Math.floor(n/2)
        // n = n>>1
        n = n >>> 1     // 
    }
    return res
}

/**
 * “>>>”运算符执行无符号右移位运算。
 * 它把无符号的 32 位整数所有数位整体右移。
 * 对于无符号数或正数右移运算，无符号右移与有符号右移运算的结果是相同的。
 *
 * https://segmentfault.com/a/1190000014613703?utm_source=tag-newest
 */

var myPow = function(x, n) {
    if(n < 0){
        x = 1/x;
        n = -n;
    }
    let pow = 1;
    while(n){
        if(n&1) pow*=x;
        x*=x;
        n>>>=1;
    }
    return pow;
};

console.log(myPow1(2, 10))

// ==== 二分法 ====
var myPow2 = function(x, n) {
    if (n < 0) {
        x = 1/x
        n = -n
    }
    let res = 1
    let temp = x
    while(n) {
        if (n & 1) {
            res = res * temp
        }
        temp = temp * temp
        n = n >>> 1
    }
    return res
}
console.log('===')
console.log(myPow2(2.1, 3))