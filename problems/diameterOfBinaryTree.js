/*

Find the Maximum Diameter of a Binary Tree

Code prompt found at:
https://leetcode.com/problems/diameter-of-binary-tree/
Difficulty: Easy

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.


This is a depth first approach, counts down both arms to create the diameter
*/


const diameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  const diameter = (node) => {
    if (!node) return -1;
    const maxLeft = diameter(node.left) + 1;
    const maxRight = diameter(node.right) + 1;
    const maxPoint = maxLeft + maxRight;
    
    maxDiameter = Math.max(maxDiameter, maxPoint);
    return Math.max(maxLeft, maxRight);
  }

  diameter(root);

  return maxDiameter;
};

export default diameterOfBinaryTree;
