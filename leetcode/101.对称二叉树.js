/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 检查是否对称

// 递归
var isSymmetric = function(root) {
  return check(root, root)
};

function check(left, right) {
  if (!left && !right) return true
  if (!left || !right) return false
  if (
    left.val === right.val &&
    check(left.left, right.right) &&
    check(left.right, right.left)
  ) {
    return true
  }
  return false
}

// =====
// 迭代
var isSymmetric = function(root) {
  return check(root, root)
};

function check(u, v) {
  let queue = []
  queue.push(u)
  queue.push(v)
  while (queue.length) {
    u = queue.shift()
    v = queue.shift()

    if (!u && !v) continue
    if (
      (!u || !v) ||
      u.val !== v.val
    ) {
      return false
    }

    queue.push(u.left)
    queue.push(v.right)

    queue.push(u.right)
    queue.push(v.left)
  }
  return true
}