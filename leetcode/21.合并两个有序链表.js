/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = temp = new ListNode()
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      temp.next = new ListNode(l2.val)
      l2 = l2.next
    }
    temp = temp.next
  }
  let node = l1 || l2
  while(node) {
    temp.next = node
    node = node.next
    temp = temp.next
  }
  return head.next
};

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

var l1 = cList([1,2,4])
var l2 = cList([1,3,4])

l1 = cList([-9,3])
l2 = cList([5,7])

mergeTwoLists(l1, l2)