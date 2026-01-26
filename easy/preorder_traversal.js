function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = [];
  const dfs = (node) => {
    if (!node) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log("result", preorderTraversal(root));
