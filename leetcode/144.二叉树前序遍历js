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
var preorderTraversal = function (root, arr = []) {
    if (root) {
        arr.push(root.val)
        preorderTraversal(root.left, arr)
        preorderTraversal(root.right, arr)
    }
    return arr
}

// ====

// 迭代
var preorderTraversal = function (root) {
    let result = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            result.push(cur.val)
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        cur = cur.right
    }
    return result
}
