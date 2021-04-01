/**
 * @param {number[]} nums
 * @return {number}
 */
// 类环形链表
var findDuplicate = function(nums) {
  let slow = nums[0]
  let fast = nums[nums[0]]
  // 找相遇点
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  slow = 0
  // 找环入口
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
};

// ====

// 二分法
var findDuplicate = function(nums) {
  let left = 0
  let right = nums.length - 1
  let count = 0
  while (left < right) {
    count = 0
    let mid = left + ((right - left) >> 1)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++
      }
    }
    if (count > mid) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// ====

// 二进制
var findDuplicate = function(nums) {
  const n = nums.length;
  let ans = 0;
  // 确定二进制下最高位是多少
  let bit_max = 31;
  while (!((n - 1) >> bit_max)) {
      bit_max -= 1;
  }
  for (let bit = 0; bit <= bit_max; ++bit) {
      let x = 0, y = 0;
      for (let i = 0; i < n; ++i) {
          if (nums[i] & (1 << bit)) {
              x += 1;
          }
          if (i >= 1 && (i & (1 << bit))) {
              y += 1;
          }
      }
      if (x > y) {
          ans |= 1 << bit;
      }
  }
  return ans;
};

let a = [1,3,4,2,2]
findDuplicate(a)