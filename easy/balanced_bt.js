function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;

    const leftHeight = dfs(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = dfs(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };

  return dfs(root) !== -1;
};

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  ),
);

console.log("result", isBalanced(root));
