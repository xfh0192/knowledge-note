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
var isBalanced = function(root) {
  return checkHeight(root, 0)
};

function checkHeight(node, height) {
  if (!node) {
    return height === 0 ? true : false
  }
  let leftHeight = checkHeight(node.left, height + 1)
  let rightHeight = checkHeight(node.right, height + 1)
  if (!leftHeight || !rightHeight || Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }
  return Math.max(leftHeight, rightHeight)
}