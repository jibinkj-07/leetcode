// Inorder traversal is a depth-first traversal of a binary tree that follows this strict order:
// Left subtree → Node (root) → Right subtree

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  if (!root.val) return [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return result;
};

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5, new TreeNode(6, new TreeNode(9), null), new TreeNode(7))
  ),
  new TreeNode(3, null, new TreeNode(8))
);

console.log("result", inorderTraversal(root));

//     1
//    / \
//   2   3
//  / \
// 4   5

// dfs(1)
//  ├─ dfs(2)
//  │   ├─ dfs(4)
//  │   │   ├─ dfs(null) → return
//  │   │   ├─ push(4)   → result = [4]
//  │   │   └─ dfs(null) → return
//  │   ├─ push(2)       → result = [4, 2]
//  │   └─ dfs(5)
//  │       ├─ dfs(null) → return
//  │       ├─ push(5)   → result = [4, 2, 5]
//  │       └─ dfs(null) → return
//  ├─ push(1)           → result = [4, 2, 5, 1]
//  └─ dfs(3)
//      ├─ dfs(null) → return
//      ├─ push(3)   → result = [4, 2, 5, 1, 3]
//      └─ dfs(null) → return
