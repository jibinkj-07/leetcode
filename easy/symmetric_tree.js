function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const checkSymmetry = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    if (node1.val != node2.val) return false;

    return (
      checkSymmetry(node1.left, node2.right) &&
      checkSymmetry(node1.right, node2.left)
    );
  };
  return checkSymmetry(root.left, root.right);
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);

console.log("result", isSymmetric(root));
