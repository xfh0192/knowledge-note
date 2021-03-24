/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let map = {}
let postorderIndex  // 后续遍历指针需要注意，每一次创建子节点都需要移动，因此需要作为全局变量，当buildMyTree执行时就移动
var buildTree = function(inorder, postorder) {
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i
  }
  postorderIndex = postorder.length - 1
  let root = buildMyTree(inorder, postorder, 0, inorder.length - 1)
  return root
};

function buildMyTree(inorder, postorder, inorderLeft, inorderRight) {
  if (inorderLeft > inorderRight) {
    return null
  }
  let rootValue = postorder[postorderIndex]
  let rootIndex = map[rootValue]

  postorderIndex--
  let root = new TreeNode(rootValue)
  root.right = buildMyTree(inorder, postorder, rootIndex + 1, inorderRight)
  root.left = buildMyTree(inorder, postorder, inorderLeft, rootIndex - 1)

  return root
}

let a = [9,3,15,20,7]
let b = [9,15,7,20,3]
let res = buildTree(a, b)

// ====

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

//====
// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/cong-zhong-xu-yu-hou-xu-bian-li-xu-lie-gou-zao-14/

 var buildTree = function(inorder, postorder) {
  let post_idx;
  const idx_map = new Map();
  const helper = (in_left, in_right) => {
      // 如果这里没有节点构造二叉树了，就结束
      if (in_left > in_right) {
          return null;
      }

      // 选择 post_idx 位置的元素作为当前子树根节点
      const root_val = postorder[post_idx];
      const root = new TreeNode(root_val);

      // 根据 root 所在位置分成左右两棵子树
      const index = idx_map.get(root_val);

      // 下标减一
      post_idx--;
      // 构造右子树
      root.right = helper(index + 1, in_right);
      // 构造左子树
      root.left = helper(in_left, index - 1);
      return root;
  }

  // 从后序遍历的最后一个元素开始
  post_idx = postorder.length - 1;

  // 建立（元素，下标）键值对的哈希表
  let idx = 0;
  inorder.forEach((val, idx) => {
      idx_map.set(val, idx);
  });
  return helper(0, inorder.length - 1);
};