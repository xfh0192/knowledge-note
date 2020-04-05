/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归
var inorderTraversal = function(root, arr = []) {
    if (!root) return arr
    inorderTraversal(root.left, arr)
    root && arr.push(root.val)
    inorderTraversal(root.right, arr)
    return arr;
};

// 迭代
var inorderTraversal1 = function(root) {
    let result = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }
    return result
}