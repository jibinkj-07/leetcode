function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    depth += 1; // increment once per level

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
};

// var maxDepth = function (root) {
//   if (!root) return 0;
//   let maxDepth = 0;
//   let traversal = (curr, depth) => {
//     maxDepth = Math.max(maxDepth, depth);
//     curr.left && traversal(curr.left, depth + 1);
//     curr.right && traversal(curr.right, depth + 1);
//   };
//   traversal(root, 1);
//   return maxDepth;
// };

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  ),
);

console.log("result", maxDepth(root));
