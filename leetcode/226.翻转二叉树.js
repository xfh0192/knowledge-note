/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 递归
var invertTree = function(root) {
    if (!root) return root
    if (!root.left && !root.right) return root
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};

// 改进
var invertTree = function(root) {
    if (!root) return root
    if (!root.left && !root.right) return root
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
};

// 迭代
var invertTree = function(root) {
    let stack = [root]
    while(stack.length) {
        let cur = stack.pop()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp
        if (cur.left) {
            stack.push(cur.left)
        }
        if (cur.right) {
            stack.push(cur.right)
        }
    }
    return root
}