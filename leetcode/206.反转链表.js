/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
var reverseList = function(head) {
    if (!head || !head.next) return head;
    let next = head.next
    let reverseHead = reverseList(next)
    head.next = null
    next.next = head
    return reverseHead;
}

// ====

// 尾递归
var reverseList = function(head) {
    return reverse(null, head)
}

var reverse = function(prev, cur) {
    if (!cur) return prev;
    let temp = cur.next
    cur.next = prev
    return reverse(cur, temp)
}

// ====

// 迭代
var reverseList = function(head) {
    let prev = null
    let cur = head
    let next = null
    while(cur) {
        // let next = cur.next
        // cur.next = prev
        // prev = cur
        // cur = next
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
};