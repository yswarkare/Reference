/*=====================================================================================================
=                             Delete a Node in a Singly Linked List                                   =
=======================================================================================================*/
/**
*!  Write a function to delete a node (except the tail) in a singly linked list,
*!  given only access to that node. Given linked list -- 4->5->1->9->NULL, which looks like following:

*?  Example 1:

*?  Input: node = 5

**  Explanation: Your linked list is 4->5->1->9->NULL. You are given the second node with value 5,
**  the linked list should become 4 -> 1 -> 9 after calling your function.

*?  Example 2:

*?  Input: node = 1

**  Explanation: Your linked list is 4->5->1->9->NULL. You are given the third node with value 1,
**  the linked list should become 4 -> 5 -> 9 after calling your function.

*?  Note:
*?  The linked list will have at least two elements.
*?  All of the nodes' values will be unique.
*?  The given node will not be the tail and it will always be a valid node of the linked list.
 */

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

const deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

console.log(node);
console.log(print(node));
deleteNode(node.next)
console.log(print(node));

/*==================================================  End  ==================================================*/