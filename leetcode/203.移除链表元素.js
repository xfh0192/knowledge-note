/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = new ListNode(null)
    let prev = newHead
    let cur = head
    prev.next = head
    while(cur) {
        if (cur.val === val) {
            prev.next = cur.next
            cur = cur.next
        } else {
            prev = cur
            cur = cur.next
        }
    }
    return newHead.next
};
