/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
var isValidBST = function(root) {
    return helper(root, null, null)
}

var helper = function(node, lower, upper) {
    if (!node) return true;
    let val = node.val
    if (lower !== null && node.val <= lower) return false
    if (upper !== null && node.val >= upper) return false

    if (!helper(node.left, lower, val)) return false
    if (!helper(node.right, val, upper)) return false
    return true
}

// =====

// 迭代
var isValidBST = function(root) {
    // let result = []
    let stack = []
    let tempVal
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        if (cur.val <= tempVal) return false
        // result.push(cur.val)
        tempVal = cur.val
        cur = cur.right
    }
    return true
};