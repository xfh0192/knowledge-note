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
var detectCycle = function(head) {
    if (!head || !head.next) return null
    let slow = head
    let fast = head
    let start = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            while(start !== slow) {
                start = start.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
};

// ====

var detectCycle = function(head) {
    let cache = new Set()
    let cur = head
    while(cur) {
        if (cache.has(cur)) {
            return cur
        } else {
            cache.add(cur)
        }
        cur = cur.next
    }
    return null
}

// ====

var detectCycle = function(head) {
    while(head && head.next){
        if(head.flag){
            return head;
        }else{
            head.flag = 1;
            head = head.next;
        }
    }
    return null;
};

// ===
// 复习

var detectCycle = function(head) {
    let slow = head
    let fast = head
    while (fast) {
        slow = slow.next
        if (fast.next) {
            fast = fast.next.next
        } else {
            return null
        }
        if (slow === fast) {
            let ptr = head
            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
    }
    return null
};