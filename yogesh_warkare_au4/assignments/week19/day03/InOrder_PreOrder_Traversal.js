/*Find in-order, pre-order traversal of tree using recursive and iterative approach.

Step 1: Create a BST.

Step 2: Insert some elements. let say five values.

Step 3: Perform in-order recursively

Step 4: Perform in-order iteratively

Step 5: Perform pre-order recursively

Step 6: Perform pre-order iteratively
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNewNode(this.root, newNode)
        }
    }

    insertNewNode(root, newNode) {
        if (root.value >= newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.insertNewNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNewNode(root.right, newNode)
            }
        }
    }

    inOrderRecursive(node) {
        if (node !== null) {
            this.inOrderRecursive(node.left)
            console.log(node.value);
            this.inOrderRecursive(node.right)
        }
    }

    inOrderIterative(root) {
        let current = root;
        let stack = [];
        while (true) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            } else if (stack.length > 0) {
                current = stack.pop();
                console.log(current.value);
                current = current.right;
            } else {
                break;
            }
        }
    }

    preOrderRecursive(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderRecursive(node.left);
            this.preOrderRecursive(node.right);
        }
    }

    preOrderIterative(root) {
        if (root == null) {
            return;
        }

        let stack = [];
        stack.push(root);
        while (stack.length > 0) {
            let node = stack.pop();
            console.log(node.value)
            if (node.right !== null) {
                stack.push(node.right)
            }
            if (node.left !== null) {
                stack.push(node.left);
            }
        }
    }
}

let tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(7);
tree.insert(8);
tree.preOrderIterative(tree.root);