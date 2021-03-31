/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    if (nums[0] < nums[nums.length - 1]) return nums[0]
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        let mid = left + ((right - left) >> 1)
        // 这里注意，因为是递增数列，因此与右侧指针比较，从右侧指针开始分割，可避免左侧的重复值指针误跳问题
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right--
        }
    }
    return nums[left]
};

let a = [10,1,10,10,10]
findMin(a)