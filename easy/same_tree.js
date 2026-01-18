function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  };

  return dfs(p, q);
};

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const q = new TreeNode(1, new TreeNode(2), new TreeNode(1));

console.log("result", isSameTree(p, q));
