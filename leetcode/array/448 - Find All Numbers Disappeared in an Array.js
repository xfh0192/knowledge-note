/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = []
  let n = nums.length
  // 由于数字范围也在[1,n]中，因此可直接用nums作为记录的哈希表
  for (let i = 0; i < n; i++) {
    let num = nums[i]
    let index = (num - 1) % n
    nums[index] += n
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      res.push(i + 1)
    }
  }
  return res
};

let a = [4,3,2,7,8,2,3,1]
findDisappearedNumbers(a) // [5,6]