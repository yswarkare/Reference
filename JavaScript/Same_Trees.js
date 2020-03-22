/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @returns {boolean}
 **/
const isSameTree = (tree1, tree2) => {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    return (
        tree1.data === tree2.data &&
        isSameTree(tree1.left, tree2.left) &&
        isSameTree(tree1.right, tree2.right)
    );
};