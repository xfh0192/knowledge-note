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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  return getMinHeight(root, 1)
};

function getMinHeight(node, height) {
  if (!node) {
    return height - 1
  }
  let leftHeight = getMinHeight(node.left, height + 1)
  let rightHeight = getMinHeight(node.right, height + 1)
  if (node.left && node.right) {
    return Math.min(leftHeight, rightHeight)
  } else if (node.left) {
    return leftHeight
  } else {
    return rightHeight
  }
}