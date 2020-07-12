/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let tempList = []
  backtrack(nums, tempList, 0, res)
  return res
};

function backtrack(nums, tempList, depth, res) {
  for (let i = depth; i < nums.length; i++) {
    let num = nums[i]
    tempList.push(num)
    backtrack(nums, tempList, i + 1, res) // 注意这里是 i+1
    tempList.pop()
  }
  res.push(tempList.slice())
}

subsets([0])    