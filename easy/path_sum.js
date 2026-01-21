function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const dfs = (node, currentSum) => {
    if (!node) return false;

    currentSum += node.val;

    if (!node.left && !node.right) {
      return currentSum === targetSum;
    }

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  };

  return dfs(root, 0);
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(
    20,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  ),
);
console.log("result is ", hasPathSum(root, 31));
