/*

Code prompt found at:
https://leetcode.com/problems/find-largest-value-in-each-tree-row/
Difficulty: Medium

You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
*/

const largestValue = (root) => {
  // exit case
  if (!root) return [];

  // recursive calls for rest of tree
  const l = largestValue(root.left);
  const r = largestValue(root.right);

  // find shortest & longest
  const long = l.length > r.length ? l : r;
  const short = l.length > r.length ? r : l;

  // iterate over long and short to find max
  for (let i = 0; i < short.length; i++) {
    // find the larger at each level
    long[i] = Math.max(long[i], short[i]);
  };

  // add root to front of long
  long.unshift(root.val);

  // return long
  return long;
}