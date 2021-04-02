/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 类链表，找循环就用快慢指针
var circularArrayLoop = function(nums) {
  let n = nums.length
  let slow = 0
  let fast = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue
    }
    slow = i
    fast = getNextIndex(nums, i)
    let slowValue = nums[slow]
    let fastValue = nums[fast]
    while (
      slowValue * fastValue > 0 && slowValue * nums[getNextIndex(nums, fast)] > 0
    ) {
      // 指针追逐
      if (slow !== fast) {
        slow = getNextIndex(nums, slow)
        // 注意：这里的fast指针会跳两步，可能出现跳第一步后，fastValue反向的情况，这是需要检查
        // 因此上面的 while 判断增加 slowValue * nums[getNextIndex(nums, fast)] > 0
        // 就是用于检查第一跳的情况
        fast = getNextIndex(nums, getNextIndex(nums, fast))
        slowValue = nums[slow]
        fastValue = nums[fast]
      } else {
        // 额外判断长度是否大于1
        if (slow === getNextIndex(nums, slow)) {
          break
        } else {
          return true
        }
      }
    }

    // 假如上面的查找没有发现环，说明上面遍历过的元素都不可能成环，全部置0避免无效查找
    let val = nums[i]
    slow = i
    while (nums[slow] * val > 0) {
      nums[slow] = 0
      slow = getNextIndex(nums, slow)
    }
  }
  return false
};

function getNextIndex(nums, index) {
  let n = nums.length
  return (((nums[index] + index)%n) + n) % n
}

let a = [2,-1,1,2,2] // true
a = [-2,1,-1,-2,-2] // false
a = [1,1,1,1,1,1,1,1,1,-5]  // false
let res = circularArrayLoop(a)
console.log(res)