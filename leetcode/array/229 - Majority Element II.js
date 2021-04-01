/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 答案解析
// 时间复杂度 O(n) 空间复杂度 O(1)
var majorityElement = function(nums) {
  if (!nums.length) return []
  let res = []
  let cand1 = nums[0], count1 = 0
  let cand2 = nums[0], count2 = 0

  // 摩尔投票法，配对阶段
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === cand1) {
      count1++
    } else if (nums[i] === cand2) {
      count2++
    } else if (count1 === 0) {
      cand1 = nums[i]
      count1 = 1
    } else if (count2 === 0) {
      cand2 = nums[i]
      count2 = 1
    } else {
      count1--
      count2--
    }
  }

  // 计数阶段
  // 已经找到了两个候选人，需要确定票数是否大于1/3
  count1 = 0
  count2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === cand1) {
      count1++
    } else if (nums[i] === cand2) {
      count2++
    }
  }

  if (count1 > nums.length / 3) {
    res.push(cand1)
  }
  if (count2 > nums.length / 3) {
    res.push(cand2)
  }
  return res
};

let a = [1,1,1,3,3,2,2,2]
console.log(majorityElement(a)) // [1,2]