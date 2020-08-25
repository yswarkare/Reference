/*
Given a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.'
https://leetcode.com/problems/binary-tree-right-side-view/
Note: You can take BST and add random number to BST and perform right side view.
 */

var rightSideView = function(root) {
    var result = [];

    function traverse(node, height) {
        if (node == null) {
            return;
        }
        if (!result[height]) {
            result[height] = node.value;
        }

        traverse(node.right, height + 1);
        traverse(node.left, height + 1);
    }

    traverse(root, 0);
    return result;
};

console.log(rightSideView(root));