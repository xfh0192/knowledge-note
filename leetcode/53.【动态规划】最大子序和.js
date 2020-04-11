/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    let sum = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let temp = sum + nums[i]
        if (temp < nums[i]) {
            sum = nums[i]
        } else {
            sum = temp
        }
        res = Math.max(res, sum)
    }
    return res
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))