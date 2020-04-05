// class Node {
//     constructor(element) {
//         this.element = element
//         this.next = null
//     }
// }

// class LinkNodeList {
//     constructor() {
//         this.length = 0
//         this.head = null
//     }

//     // 增加node
//     append(element) {
//         let node = new Node(element)
//         let cur

//         if (this.head == null) {
//             // head是第一个
//             this.head = node
//         } else {
//             // 遍历链表
//             cur = this.head
//             while (cur.next) {
//                 cur = cur.next
//             }
//             cur.next = node
//         }
//         this.length += 1
//     }
    
//     print() {
//         let cur = this.head
//         let ret = []
//         while (cur) {
//             ret.push(cur.element)
//             cur = cur.next
//         }
//         return ret.join('==>')
//     }

//     // 移除
//     removeAt(index) {
//         if (index <= 0 || index > this.length) {
//             throw new Error(`超出链表长度边界，请检查。length:${this.length},index:${index}`)
//         }
//         let cur = this.head
//         let prev
//         let i = 0
//         if (index === 0) {
//             // 删除第一项
//             this.head = cur.next
//         } else {
//             while (i < index) {
//                 // 上一个和当前都要保存下来
//                 prev = cur
//                 cur = cur.next
//                 i++
//             }
//             prev.next = cur.next
//             cur.next = null
//             this.length -= 1
//             return cur.element  // 返回删除节点
//         }
//     }

//     // 插入
//     insert(element, index) {
//         let cur = this.head
//         let prev
//         let i = 0
//         if (index === 0) {
//             cur = new Node(element)
//             cur.next = this.head
//         } else {
//             while (i < index) {
//                 prev = cur
//                 cur = cur.next
//                 i++
//             }
//             let insertNode = new Node(element)
//             insertNode.next = cur
//             prev.next = insertNode
//         }
//         this.length++
//     }

//     // 反转
//     reverse() {
//         if (this.length < 2) return
//         let prev = null
//         let cur = this.head
//         let next

//         while (cur) {
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next

//             // 解构
//             // [cur.next, prev, cur] = [prev, cur, cur.next]
//         }
//         this.head = prev
//         return prev
//     }
// }

// let linkNode = new LinkNodeList();
// linkNode.append('aaa')
// linkNode.append('bbb')
// linkNode.append('ccc')
// linkNode.removeAt(2)
// linkNode.append('ddd')
// linkNode.append('eee')
// linkNode.insert('111', 2)
// console.log(linkNode.print())
// linkNode.reverse()
// console.log(linkNode.print())

// ===== 使用哨兵节点 =====

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkNodeList {
    constructor() {
        this.head = new Node()
        this.length = 0
    }

    print() {
        let cur = this.head
        let ret = []
        while (cur) {
            cur.element && ret.push(cur.element)
            cur = cur.next
        }
        return ret.join('==>')
    }

    append(element) {
        let node = new Node(element)
        let cur = this.head
        while(cur.next) {
            cur = cur.next
        }
        cur.next = node
        this.length++
    }

    removeAt(index) {
        if (index > this.length) return
        let cur = this.head
        let prev = null
        let i = -1
        while(i < index) {
            prev = cur
            cur = cur.next
            i++
        }
        if (cur) {
            prev.next = cur.next
            cur.next = null
            this.length--
        }
    }

    insert(element, index) {
        if (index > this.length) return
        let node = new Node(element)
        let prev = this.head
        let cur = prev.next
        let i = 0
        while(i < index) {
            prev = cur
            cur = cur.next
            i++
        }
        if (cur) {
            prev.next = node
            node.next = cur
            this.length++
        }
    }

    // 迭代
    // reverse() {
    //     if (this.length < 1) return;
    //     let prev = this.head
    //     let cur = prev.next
    //     let next
    //     prev.next = null
    //     while(cur) {
    //         next = cur.next
    //         cur.next = prev
    //         prev = cur
    //         cur = next
    //     }
    //     this.head = prev
    // }

    // 递归
    reverse() {
        if (this.length < 1) return;
        let prev = this.head
        let cur = prev.next
        prev.next = null
        prev = nextNode(prev, cur)
        // console.log(prev.element)
        this.head = prev
    }
}

function nextNode(prev, cur) {
    if (!cur) {
        return prev;
    }
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
    return nextNode(prev, cur);
}

let linkNode = new LinkNodeList();
linkNode.append('aaa')
linkNode.append('bbb')
linkNode.append('ccc')
linkNode.removeAt(2)
linkNode.append('ddd')
linkNode.append('eee')
console.log(linkNode.print())
linkNode.insert('111', 2)
console.log(linkNode.print())
linkNode.reverse()
console.log(linkNode.print())