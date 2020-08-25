// Remove all elements from a linked list of integers that have value val.
// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("tail: ", this.tail.value)
    }

    remove(value) {
        //if element to be deleted is at head
        if (this.head.value == value) { this.head = this.head.next }
        let current = this.head;

        while (current) {
            if (current.next && current.next.value == value) {
                current.next = current.next.next;
            }
            current = current.next;
        }
    }
}

let head = new LinkedList();
head.push(1);
head.push(2);
head.push(3);
head.push(6);
head.push(4);
head.push(5);
head.push(6);
head.push(1);
head.push(6);
head.remove(6);
head.print();