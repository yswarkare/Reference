function mergeLists(head1, head2) {
    let headNode = {
        // unnecessary properties, just headNode = {} should be enough
        data: 0,
        next: null
    }

    let tail = headNode;
    let node1 = head1;
    let node2 = head2;


    while (true) {
        // can be substituted with OR operator:
        // if (!node1 || !node2) { tail.next = node1 || node2; break; }
        if (!node1) { tail.next = node2; break; }
        if (!node2) { tail.next = node1; break; }

        if (node1.data <= node2.data) {
            // unnecessary temp variable and check after
            let temp = node1;
            if (!temp) return;

            /** All you need is to assign tail next to min node and make step forward with the node:
            node1 = node1.next;
            temp.next = tail.next;
            tail.next = temp;
            */
            tail.next = node1;
            node1 = node1.next;
        } else {
            // Do the same for else
            let temp = node2;
            if (!temp) return;

            node2 = node2.next;
            temp.next = tail.next;
            tail.next = temp;
        }

        tail = tail.next;
    }

    // Congrats ;)
    return headNode.next;
}