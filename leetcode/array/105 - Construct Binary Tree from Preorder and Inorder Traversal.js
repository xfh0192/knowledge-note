/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let map = {}
var buildTree = function(preorder, inorder) {
  let len = preorder.length
  for (let i = 0; i < len; i++) {
    map[inorder[i]] = i
  }
  return buildMyTree(preorder, inorder, 0, len - 1, 0, len - 1)
};

function buildMyTree(preorder, inorder, preorderLeft, preorderRight, inorderLeft, inorderRight) {
  if (preorderLeft > preorderRight) {
    return null
  }
  // 在inorder中节点值的位置
  let rootIndex = map[preorder[preorderLeft]]
  let rootVal = preorder[preorderLeft]

  // 左子树节点数
  let leftSubTreeLen = rootIndex - inorderLeft

  // 根节点
  let root = new TreeNode(rootVal)

  // 构造左子树
  root.left = buildMyTree(preorder, inorder, preorderLeft + 1, preorderLeft + leftSubTreeLen, inorderLeft, rootIndex - 1)
  // 构造右子树
  root.right = buildMyTree(preorder, inorder, preorderLeft + leftSubTreeLen + 1, preorderRight, rootIndex + 1, inorderRight)

  return root
}

// =====
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/

var buildTree = function(preorder, inorder) {
  if (preorder === null || inorder === null) {
    return null
  }
  let root = new TreeNode(preorder[0])
  let stack = []
  stack.push(root)
  let inorderIndex = 0
  for (let i = 1; i < preorder.length; i++) {
    let preorderValue = preorder[i]
    let node = stack[stack.length - 1]
    if (node.val != preorderValue) {
      node.left = new TreeNode(preorderValue)
      stack.push(node.left)
    } else {
      while(stack.length && node.val === inorder[inorderIndex]) {
        stack.pop()
        inorderIndex++
      }
      node.right = new TreeNode(preorderValue)
      stack.push(node.right)
    }
  }
  return root
}


// ====

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
