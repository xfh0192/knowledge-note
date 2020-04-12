/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/**
 * 解题思路：
 * 由于分配饼干这件事前后的步骤不会产生关联，
 * 所以根据贪心算法的原理，分配的最优策略是每次分配只关注未分配饼干的最小胃口的小朋友。
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a - b)
    s = s.sort((a,b) => a - b)
    let gLen = g.length
    let sLen = s.length
    let i = 0
    let j = 0
    // let count = 0
    while (i < gLen && j < sLen) {
        if (s[j] >= g[i]) {
            i++
            j++
            // count++
        } else {
            j++
        }
    }
    return i
};

console.log(findContentChildren([1,2,3], [1,1]))
console.log(findContentChildren([1,2], [1,2,3]))