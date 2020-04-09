/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while(l1 || l2) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        let sum = x + y + carry
        carry = parseInt(sum / 10)
        sum = sum % 10
        cur.next = new ListNode(sum)
        cur = cur.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry > 0) cur.next = new ListNode(carry)
    return head.next
};