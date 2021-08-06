/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let root = createMidNode(nums, 0, nums.length - 1)
  return root
};

function createMidNode(nums, left, right) {
  if (left > right || left > nums.length - 1 || right > nums.length - 1) {
    return null
  }
  let mid = left + Math.floor((right - left) / 2)
  let value = nums[mid]
  if (!value && value !== 0) {
    return null
  }
  let node = new TreeNode(value)
  node.left = createMidNode(nums, left, mid - 1)
  node.right = createMidNode(nums, mid + 1, right)
  return node
}

let a = [-10,-3,0,5,9]
// [0,-3,9,-10,null,5]

let res = sortedArrayToBST(a)
console.log(res)

// ===

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
