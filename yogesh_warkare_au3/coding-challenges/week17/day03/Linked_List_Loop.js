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
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

const head = node1;

function checkLoop(head) {
    let slow = head;
    let fast = head;

    while (fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) { return true };
        if (fast.next == null) return false;
    }
}

console.log(checkLoop(head));