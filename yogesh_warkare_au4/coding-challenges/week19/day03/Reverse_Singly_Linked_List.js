/* ----------------------- Reverse Singly Linked List ----------------------- */
/* 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively.
Could you implement both?
*/
/* -------------------------------------------------------------------------- */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node = new Node(4);

node.next = new Node(5);
node.next.next = new Node(1);
node.next.next.next = new Node(9);

const print = function(node) {
    let arr = [];
    let current = node;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

const reverse = function(node) {
    var previous = null;
    var next;

    while (node) {
        next = node.next;
        node.next = previous;
        previous = node;
        node = next;
    }
    return previous;
}

console.log(node);
console.log(reverse(node));

/* -------------------------------------------------------------------------- */