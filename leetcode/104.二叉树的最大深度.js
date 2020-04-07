/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归
var maxDepth = function(root) {
    if (root === null) return 0
    let left_height = maxDepth(root.left)
    let right_heigth = maxDepth(root.right)
    return Math.max(left_height, right_heigth) + 1;
};

// 迭代
var maxDepth = function(root) {
    if (root === null) return 0

    let depth = 0
    let stack = [{node: root, depth: 1}]
    while(stack.length) {
        let cur = stack.pop()
        if (cur) {
            depth = Math.max(cur.depth)
            if (cur.left) {
                stack.push({node: cur.left, depth: cur.depth + 1})
            }
            if (cur.right) {
                stack.push({node: cur.right, depth: cur.depth + 1})
            }
        }
    }

    return depth
}