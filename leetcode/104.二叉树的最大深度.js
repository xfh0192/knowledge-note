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
            depth = Math.max(depth, cur.depth)
            let listNode = cur.node
            if (listNode.left) {
                stack.push({node: listNode.left, depth: cur.depth + 1})
            }
            if (listNode.right) {
                stack.push({node: listNode.right, depth: cur.depth + 1})
            }
        }
    }

    return depth
}

//===
// 复习

// 递归
var maxDepth = function(root) {
    return getLength(root, 0)
}

function getLength(root, len) {
    if (!root) return len
    let leftLen = getLength(root.left, len + 1)
    let rightLen = getLength(root.right, len + 1)
    return Math.max(leftLen, rightLen)
}

// 迭代
var maxDepth = function(root) {
    if (!root) return 0
    let queue = [{node: root, depth: 1}]
    let res = 0
    while (queue.length) {
        let cur = queue.shift()
        if (cur) {
            res = Math.max(res, cur.depth)
            let node = cur.node
            if (node.left) {
                queue.unshift({node: node.left, depth: cur.depth + 1})
            }
            if (node.right) {
                queue.unshift({node: node.right, depth: cur.depth + 1})
            }
        }
    }
    return res
}

var a = cList([3,9,20,null,null,15,7])
// 3

let res = maxDepth(a)
console.log(res)


// =====
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function cList(arr) {
    let head = temp = new ListNode()
    for (let i = 0; i < arr.length; i++) {
      let node = new ListNode(arr[i])
      temp.next = node
      temp = node
    }
    return head.next
  }