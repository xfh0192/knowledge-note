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
var postorderTraversal = function(root, arr = []) {
    if (!root) return arr;
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    root && arr.push(root.val)
    return arr
};

// ====

// 迭代【思路，按照中序遍历思路，但是过程相反，最后结果reverse】
var postorderTraversal = function(root) {
    let result = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            result.push(cur.val)
            stack.push(cur)
            cur = cur.right
        }
        cur = stack.pop()
        cur = cur.left
    }
    return result.reverse()
}

// ====
var postorderTraversal = function(root) {
    let result = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            result.unshift(cur.val)
            cur = cur.right
        }
        cur = stack.pop()
        cur = cur.left
    }
    return result
}

// https://github.com/Alex660/Algorithms-and-data-structures/blob/master/demos/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%89%E5%BA%8F%E9%81%8D%E5%8E%86.md