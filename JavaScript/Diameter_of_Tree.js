/**
 * Calculate diameter with center `root`
 * @param {TreeNode} root
 * @returns {number}
 */
const countDiameter = root => {
    if (!root) return 0;

    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
};

/**
 * @param {TreeNode} root
 * @returns {number}
 */
const diameterOfBinaryTree = root => {
    if (!root) return 0;

    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);

    return Math.max(center, left, right);
};