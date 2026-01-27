function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    result.push(node.val);
  };
  dfs(root);
  return result;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log("result", postorderTraversal(root));
