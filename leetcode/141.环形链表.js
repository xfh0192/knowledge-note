var hasCycle = function (head) {
    let cache = new Set()
    while (head) {
        if (cache.has(head)) {
            return true
        } else {
            cache.add(head)
        }
    }
    return false
}

// ========

var hasCycle1 = function (head) {
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            return true
        }
    }
    return false
}