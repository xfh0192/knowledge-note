 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归
var isSameTree = function(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val != q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// =====

// 迭代
var isSameTree = function(p, q) {
    if (p === null && q === null) return true
    if (!check(p, q)) return false

    let pStack = [p]
    let qStack = [q]
    while (pStack.length) {
        p = pStack.pop()
        q = qStack.pop()

        // 先检查当前节点是否相等
        if (!check(p, q)) return false
        // 当前节点相等，而且不是null，就继续检查子节点
        if (p !== null) {
            // 先检查子节点是否相等
            if (!check(p.left, q.left)) return false
            // 子节点相等了，再检查是否null
            if (p.left !== null) {
                // 子节点不是null，才有可能有left
                pStack.push(p.left)
                qStack.push(q.left)
            }
            if (!check(p.right, q.right)) return false
            if (p.right !== null) {
                pStack.push(p.right)
                qStack.push(q.right)
            }
        }
    }
    return true
}

var check = function(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val != q.val) return false
    return true
}