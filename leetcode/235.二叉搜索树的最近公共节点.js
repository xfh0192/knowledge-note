/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    else {
        return root
    }
};

// 迭代
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left
        }
        else if (p.val > root.val && q.val > root.val) {
            root = root.right
        }
        else {
            break
        }
    }
    return root
}