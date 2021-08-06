/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let visited = new Set()
    let temp = headA
    while(temp) {
      visited.add(temp)
      temp = temp.next
    }
    temp = headB
    while(temp) {
      if (visited.has(temp)) {
        return temp
      }
      temp = temp.next
    }
    return null
};

// ===

var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let p1 = headA
  let p2 = headB
  while(p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }
  return p1
}