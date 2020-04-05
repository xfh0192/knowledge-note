class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkNodeList {
    constructor() {
        this.length = 0
        this.head = null
    }

    // 增加node
    append(element) {
        let node = new Node(element)
        let cur

        if (this.head == null) {
            // head是第一个
            this.head = node
        } else {
            // 遍历链表
            cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        this.length += 1
    }
    
    print() {
        let cur = this.head
        let ret = []
        while (cur) {
            ret.push(cur.element)
            cur = cur.next
        }
        return ret.join('==>')
    }

    removeAt(index) {
        if (index <= 0 || index > this.length) {
            throw new Error(`超出链表长度边界，请检查。length:${this.length},index:${index}`)
        }
        let cur = this.head
        let prev
        let i = 0
        if (index === 0) {
            // 删除第一项
            this.head = cur.next
        } else {
            while (i < index) {
                // 上一个和当前都要保存下来
                prev = cur
                cur = cur.next
                i++
            }
            prev.next = cur.next
            cur.next = null
            this.length -= 1
            return cur.element  // 返回删除节点
        }
    }

    insert(element, index) {
        let cur = this.head
        let prev
        let i = 0
        if (index === 0) {
            cur = new Node(element)
            cur.next = this.head
        } else {
            while (i < index) {
                prev = cur
                cur = cur.next
                i++
            }
            let insertNode = new Node(element)
            insertNode.next = cur
            prev.next = insertNode
        }
        this.length++
    }
}

let linkNode = new LinkNodeList();
linkNode.append('aaa')
linkNode.append('bbb')
linkNode.append('ccc')
linkNode.removeAt(2)
linkNode.append('ddd')
linkNode.append('eee')
linkNode.insert('111', 2)
console.log(linkNode.print())