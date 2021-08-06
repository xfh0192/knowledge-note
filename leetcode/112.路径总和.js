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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  // 广度优先遍历
  let queue = [root]
  let sumQueue = [root.val]
  while (queue.length) {
    let cur = queue.shift()
    let sum = sumQueue.shift()
    if (cur !== root) {
      sum = sum + cur.val
    }
    // 当节点为叶子节点才需要检查（无子节点）
    if (!cur.left && !cur.right && sum === targetSum) {
      return true
    }
    if (cur.left) {
      queue.push(cur.left)
      sumQueue.push(sum)
    }
    if (cur.right) {
      queue.push(cur.right)
      sumQueue.push(sum)
    }
  }
  return false
};

let a = [5,4,8,11,null,13,4,7,2,null,null,null,1]
let b = 22
// true