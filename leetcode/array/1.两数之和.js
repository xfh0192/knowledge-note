/**
 * 两数之和
 * 
 * [2,7,11,15]
 * 9
 * 
 * return [0,1]
 */

// 暴力
// 两层遍历 时间O(n^2) 空间O(1)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// 每项存起诉求
// 一层遍历 时间O(n) 空间(n)
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length;i++) {
        let num = nums[i]
        if (num in obj) {
            return [obj.num, i]
        } else {
            obj[target - num] = i
        }
    }
}