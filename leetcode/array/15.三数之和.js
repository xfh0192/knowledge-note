// https://leetcode-cn.com/problems/3sum/
// https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/

/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
    注意：答案中不可以包含重复的三元组。

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    满足要求的三元组集合为：
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */

// // 回溯法 【超出时间限制】
// var threeSum = function(nums) {
//   nums = nums.sort((a,b) => a - b)
//   let res = []
//   let temp = []
//   let hash = {}
//   backtrack(nums, res, temp, 0, hash)
//   return res
// };

// function backtrack(nums, res, temp, start, hash) {
//   if (temp.length === 3 && temp.reduce((prev, next) => {
//     return prev += next
//   }, 0) === 0) {
//     res.push(temp.slice())
//     return
//   }

//   for (let i = start + 1; i < nums.length; i++) {
//     // 假如这里不进行剪枝，将会出现重复结果 [-1,0,1] [-1,0,1]
//     if (hash[i] || (!hash[i - 1] && nums[i] === nums[i - 1])) {
//       continue
//     }
//     temp.push(nums[i])
//     hash[i] = true
//     backtrack(nums, res, temp, i, hash) // 修改点：从start开始寻找，而不是从depth开始寻找下一层元素
//     temp.pop()
//     hash[i] = false
//   }
// }

// let nums = [-1, 0, 1, 2, -1, -4]

// threeSum(nums)

// =============
// 答案 -- 双指针

var threeSum = function(nums) {
  // 重要：排序
  nums = nums.sort((a,b) => a - b)

  let res = []
  for (let i = 0; i < nums.length; i++) {
    // 排序后，假如当前项大于0，那么后面的数都大于0，不用计算了
    if (nums[i] > 0) {
      break;
    }
    // 假如当前项和前一项相同，跳过
    if (nums[i] === nums[i - 1]) {
      continue
    }

    let num = nums[i]
    let left = i + 1  // 左指针。因为排序过了，只需要从i+1开始计算
    let right = nums.length - 1 // 右指针
    while(left < right) {
      let sum = num + nums[left] + nums[right]
      if (sum === 0) {
        res.push([num, nums[left], nums[right]])
        // 去重
        while (nums[left] === nums[left + 1]) {
          left++
        }
        // 去重
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}


let nums = [-1, 0, 1, 2, -1, -4]

threeSum(nums)