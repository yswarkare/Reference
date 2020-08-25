class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;

const head = node1;

function reverse(head) {
    let newHead
    let stack = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    newHead = stack.pop() || []
    current = newHead
    while (current) {
        if (stack.length !== 0) {
            current.next = stack.pop()
        } else {
            current.next = null;
        }
        current = current.next;
    }
    return newHead;
}

console.log(reverse(head));