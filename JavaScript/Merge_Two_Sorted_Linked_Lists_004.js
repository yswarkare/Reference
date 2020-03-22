/**Merge two sorted linked lists

 * This is a common interview question testing basic knowledge of linked lists.
The goal here is merge two linked lists that are already sorted.

 * For example: if L1 = 1 -> 3 -> 10 and L2 = 5 -> 6 -> 9 then your program should output the linked 
list 
1 -> 3 -> 5 -> 6 -> 9 -> 10.

 * Algorithm

 * The algorithm for this question is quite simple since the two linked lists are already sorted. 
We create a new linked list and loop through both lists appending the smaller nodes. 
We'll be using some code that we used in a previous linked list interview question.

 * (1) Create a new head pointer to an empty linked list.
 * (2) Check the first value of both linked lists.
 * (3) Whichever node from L1 or L2 is smaller, append it to the new list and move the pointer to the next node.
 * (4) Continue this process until you reach the end of a linked list.

 * Example

L1 = 1 -> 3 -> 10
L2 = 5 -> 6 -> 9
L3 = null

Compare the first two nodes in both linked lists: (1, 5), 1 is smaller so add it to the new linked list and move the pointer in L1.
L1 = 3 -> 10
L2 = 5 -> 6 -> 9
L3 = 1

Compare the first two nodes in both linked lists: (3, 5), 3 is smaller so add it to the new linked list and move the pointer in L1.
L1 = 10
L2 = 5 -> 6 -> 9
L3 = 1 -> 3

Compare the first two nodes in both linked lists: (10, 5), 5 is smaller so add it to the new linked list and move the pointer in L2.
L1 = 10
L2 = 6 -> 9
L3 = 1 -> 3 -> 5

Compare the first two nodes in both linked lists: (10, 6), 6 is smaller so add it to the new linked list and move the pointer in L2.
L1 = 10
L2 = 9
L3 = 1 -> 3 -> 5 -> 6

Compare the first two nodes in both linked lists: (10, 9), 9 is smaller so add it to the new linked list and move the pointer in L2.
L1 = 10
L2 = null
L3 = 1 -> 3 -> 5 -> 6 -> 9

Because L2 points to null, simply append the rest of the nodes from L1 and we have our merged linked list.
L3 = 1 -> 3 -> 5 -> 6 -> 9 -> 10

 */

function Node(data, next) {
    this.data = data;
    this.next = next;
}

function merge(L1, L2) {

    // create new linked list pointer
    var L3 = new Node(null, null);
    var prev = L3;

    // while both linked lists are not empty
    while (L1 !== null && L2 !== null) {
        if (L1.data <= L2.data) {
            prev.next = L1;
            L1 = L1.next;
        } else {
            prev.next = L2;
            L2 = L2.next;
        }
        prev = prev.next;
    }

    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (L1 === null) { prev.next = L2; }
    if (L2 === null) { prev.next = L1; }

    // return the sorted linked list
    return L3.next;
    console.log(L3);

}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4;

merge(L1, L2);


/**
* Running time
This algorithm runs in O(n + m) time where n and m are the lengths of the respective linked lists. 
This is the running time because to merge both linked lists into one, 
we need to iterate through each node in the list.
*/