/*

Construct Binary Search Tree from Preorder Traversal

Code prompt found at:
https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
Difficulty: Medium

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note:
1 <= preorder.length <= 100

The values of preorder are distinct.
*/


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const bstFromPreorder = (preorder) => {
  if (preorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const left = [];
  const right = [];

  for (let i = 1; i < preorder.length; i++) {
    preorder[i] < root.val ? left.push(preorder[i]) : right.push(preorder[i]);
  };

  root.left = bstFromPreorder(left);
  root.right = bstFromPreorder(right);

  return root;
};

export default bstFromPreorder;
