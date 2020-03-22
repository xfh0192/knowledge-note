function fib(n) {

    // // 递归 从末到初
    // if (n == 0 || n == 1) {
    //     return n;
    // }
    // return fib(n - 1) + fib(n - 2);

    // 递推 从初到末
    // 利用缓存
    let cache = [];
    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == 1) {
            cache[i] = i
        } else {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[n];
}