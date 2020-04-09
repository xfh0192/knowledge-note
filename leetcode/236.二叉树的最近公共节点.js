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
let target = null;
var lowestCommonAncestor = function(root, p, q) {
    recurseTree(root, p, q)
    return target
};

function recurseTree(node, p, q) {
    if (!node) return false
    let left = recurseTree(node.left, p, q) ? 1 : 0
    let right = recurseTree(node.right, p ,q) ? 1 : 0

    let mid = (node === p || node === q) ? 1 : 0

    if (mid + left + right >= 2) {
        target = node;
    }
    return (mid + left + right > 0)
}

// ====

var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q){
        return root;
    }
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }
    return null;
};

// ====

var lowestCommonAncestor = function(root, p, q) {
    return recurseTree(root, p, q)
}

function recurseTree(root, p, q) {
    if (!root) return root
    if (root === p || root === q) return root
    let left = recurseTree(root.left, p, q)
    let right = recurseTree(root.right, p, q)
    if (left && right) {
        return root
    } else if (left) {
        return left
    } else if (right) {
        return right
    }
    return null
}