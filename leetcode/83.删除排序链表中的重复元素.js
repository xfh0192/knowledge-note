/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let map = {}
  let res = resTemp = new ListNode()
  let cur = head
  while (cur) {
    if (!map[cur.val]) {
      map[cur.val] = true
      resTemp.next = new ListNode(cur.val)
      resTemp = resTemp.next
    }
    cur = cur.next
  }
  return res.next
};

let a = cList([1,1,2])

let res = deleteDuplicates(a)



function cList(arr) {
  let head = temp = new ListNode()
  for (let i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i])
    temp.next = node
    temp = node
  }
  return head.next
}
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}