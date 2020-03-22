/* 
Merge Two Sorted Linked lists problem
Merge two sorted linked lists and return it as a new list. The new list should also be sorted.

Example:

Input: 
1->2->4 
1->3->4

Output: 1->1->2->3->4->4
Merge Two Sorted Linked lists solution in Java
Initialize a new LinkedList that represents the merged list (result). Now, iterate over both the lists (l1 and l2), and for every iteration

Find the node with the minimum value
Add this node to the merged list (result)
Here is the complete implementation:
*/


class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
    }
}

class MergeSortedLinkedList {

    private static ListNode mergeSortedLinkedLists(ListNode l1, ListNode l2) {
        ListNode result = null;
        ListNode head = null;

        while (l1 != null || l2 != null) {
            int minVal;
            if (l1 == null) {
                minVal = l2.val;
                l2 = l2.next;
            } else if (l2 == null) {
                minVal = l1.val;
                l1 = l1.next;
            } else if (l1.val <= l2.val) {
                minVal = l1.val;
                l1 = l1.next;
            } else {
                minVal = l2.val;
                l2 = l2.next;
            }

            if (result == null) {
                result = head = new ListNode(minVal);
            } else {
                result.next = new ListNode(minVal);
                result = result.next;
            }
        }

        return head;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        ListNode mergedList = mergeSortedLinkedLists(l1, l2);
        while (mergedList != null) {
            System.out.print(mergedList.val + " ");
            mergedList = mergedList.next;
        }
        System.out.println();
    }
}

/*
# Output
$ javac MergeSortedLinkedList.java
$ java MergeSortedLinkedList
1 1 2 3 4 4
Note that, we’re creating new nodes for the resulting Linked List instead of using the nodes of the supplied LinkedLists directly. This solution will use extra space, but is recommended in the real world because we’re not modifying the LinkedLists supplied in the arguments.

If you don’t want to create new nodes, then you can use the supplied LinkedList nodes directly:
*/


private static ListNode mergeSortedLinkedLists(ListNode l1, ListNode l2) {
    ListNode result = null;
    ListNode head = null;

    while (l1 != null || l2 != null) {
        ListNode minNode;
        if (l1 == null) {
            minNode = l2;
            l2 = l2.next;
        } else if (l2 == null) {
            minNode = l1;
            l1 = l1.next;
        } else if (l1.val <= l2.val) {
            minNode = l1;
            l1 = l1.next;
        } else {
            minNode = l2;
            l2 = l2.next;
        }

        if (result == null) {
            result = head = minNode;
        } else {
            result.next = minNode;
            result = result.next;
        }
    }

    return head;
}

/*
Merge Two Sorted Linked lists solution in Java using Recursion
You can also use recursion to merge the linked lists. Following function shows the recursive approach:
*/


private static ListNode mergeSortedLinkedLists(ListNode l1, ListNode l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }

    ListNode result = null;
    if (l1.val <= l2.val) {
        result = new ListNode(l1.val);
        result.next = mergeSortedLinkedLists(l1.next, l2);
    } else {
        result = new ListNode(l2.val);
        result.next = mergeSortedLinkedLists(l1, l2.next);
    }
    return result;
}