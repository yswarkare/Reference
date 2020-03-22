function mergeLists(head1, head2) {
    let headNode = {
        data: 0,
        next: null
    }

    let tail = headNode;
    let node1 = head1;
    let node2 = head2;


    while (true) {
        if (!node1) { tail.next = node2; break; }
        if (!node2) { tail.next = node1; break; }

        if (node1.data <= node2.data) {
            let temp = node1;
            if (!temp) return;

            node1 = node1.next;
            temp.next = tail.next;
            tail.next = temp;
        } else {
            let temp = node2;
            if (!temp) return;

            node2 = node2.next;
            temp.next = tail.next;
            tail.next = temp;
        }

        tail = tail.next;
    }

    return headNode.next;
}
// src -> source node reference
// dest -> tail reference
function moveNode(node, tail) {

    let temp = node; // temp taşınacak node
    if (!temp) return;

    node = node.next;
    temp.next = tail.next;
    tail.next = temp;
}