/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

*/

const maxPathSum = function(root) {
  let res = -Infinity;

  (function maxPath(node) {
      if (!node) return 0;

      const maxL = Math.max(0, maxPath(node.left));
      const maxR = Math.max(0, maxPath(node.right));

      res = Math.max(res, maxL + maxR + node.val);

      return Math.max(node.val + maxL, node.val + maxR);
  })(root);

  return res;
};

export default maxPathSum;
