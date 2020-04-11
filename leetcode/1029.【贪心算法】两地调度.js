/**
 * @param {number[][]} costs
 * @return {number}
 */

 /**
  * 贪心算法
  * 我们这样来看这个问题，公司首先将这 2N2N 个人全都安排飞往 BB 市，
  * 再选出 NN 个人改变它们的行程，让他们飞往 AA 市。
  * 如果选择改变一个人的行程，那么公司将会额外付出 price_A - price_B 的费用，这个费用可正可负。
  * 
  * 因此最优的方案是，选出 price_A - price_B 最大的 NN 个人，让他们飞往 A 市，其余人飞往 B 市。
  */
var twoCitySchedCost = function(costs) {
    // let res = []
    // for (let i = 0; i < costs.length; i++) {
    //     res[i] = {sum: costs[i][0] - costs[i][1], costs: costs[i], index: i}
    // }
    // res.sort((a, b) => a.sum - b.sum)

    // 排序优化
    // 让其以 costs[0]-costs[1] 的差值从小到大排序。
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    let midIndex = res.length >>> 1

    let sum = 0
    for (let i = 0; i < res.length; i++) {
        if (i < midIndex) {
            sum += res[i].costs[0]
        } else {
            sum += res[i].costs[1]
        }
    }
    return sum
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))