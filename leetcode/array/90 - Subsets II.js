/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯
var subsetsWithDup = function(nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  generateSubsets(nums, [], res, 0)
  return res
};

function generateSubsets(nums, temp, res, index = 0) {
  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] === nums[i - 1]) {
      continue
    }
    temp.push(nums[i])
    generateSubsets(nums, temp, res, i + 1)
    temp.pop()
  }
  res.push(temp.slice())
}

// 有重复元素
let a = [1,2,2]
console.log(subsetsWithDup(a));

// ---
// 位运算
// https://leetcode-cn.com/problems/subsets-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-19/
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  let count = 1 << nums.length
  for (let i = 0; i < count; i++) {
    let duplicate = false
    let temp = []
    for (let j = 0; j < nums.length; j++) {
      /**
       * 利用位运算作为掩码的思路：
       * 低位到高位，方向从右向左（nums数组也是，反向排列对应掩码位
       */
      // 将先进行移位，再进行且运算
      if ((i >> j & 1) == 1) {
        // 当前是重复数字，并且前一位是 0，跳过这种情况
        /**
         * 此处是因为，只有一开始的连续相同数才是第一次获取到的组合，且后续数字的组合也已经被计算了
         * 假如再次遇到这个位置的连续相同数字，假如中间的 j 位置出现了0，表示此时已经不是第一次计算这堆重复数字的组合了（而且后面的组合已经计算过）
         * 因此直接跳过没有问题
         */
        if (j > 0 && nums[j] === nums[j - 1] && (i >> (j - 1) & 1) === 0) {
          duplicate = true
          break
        } else {
          temp.push(nums[j])
        }
      }
    }
    if (!duplicate) {
      res.push(temp)
    }
  }
  return res
};

// 有重复元素
let a = [1,2,2]
console.log(subsetsWithDup(a));
