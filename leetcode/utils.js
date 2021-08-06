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