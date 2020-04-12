/**
 * @param {number[]} nums
 * @return {number}
 */

// 分治
var majorityElement = function(nums) {
    return findMajor(nums, 0, nums.length - 1)
};

function findMajor(nums, left, right) {
    if (left === right) return nums[left]

    let midIndex = parseInt((right - left) / 2, 10) + left
    let leftEle = findMajor(nums, left, midIndex)
    let rightEle = findMajor(nums, midIndex + 1, right)
    
    // 左右众数相等，直接返回
    if (leftEle === rightEle) return leftEle

    // 否则，找出左右众数的数量比较
    let leftCount = countInRange(nums, leftEle, left, right)
    let rightCount = countInRange(nums, rightEle, left, right)

    // 这步有问题，当最后左右都只有1个元素时。。众数无法判断
    return leftCount > rightCount ? leftEle : rightEle
}

function countInRange(nums, ele, left, right) {
    let count = 0
    for (let i = left; i < right; i++) {
        if (nums[i] === ele) {
            count++
        }
    }
    return count
}

// 排序
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

// 【特别】投票算法
var majorityElement = function(nums) {
    let temp = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            temp = nums[i]
        }
        temp === nums[i] ? count++ : count--
    }
    return temp
}

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([6,5,5]))