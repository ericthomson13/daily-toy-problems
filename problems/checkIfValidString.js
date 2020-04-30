/*

Check if String is Valid Path Through Binary Tree

Code prompt found at:
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3315/
Difficulty: Unknown

Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree.

We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.



Example 1:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation:
The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure).
Other valid sequences are:
0 -> 1 -> 1 -> 0
0 -> 0 -> 0
Example 2:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false
Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
Example 3:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.


Constraints:

1 <= arr.length <= 5000
0 <= arr[i] <= 9
Each node's value is between [0 - 9].

*/

const isValid = (root, arr) => {
  const helper = (node, i) => {
    if (!node) return false;
    if (node.val !== arr[i]) return false;

    if (node.val === arr[i] && !node.left && !node.right) return true;

    return helper(node.left, i + 1) || helper(node.right, i + 1);
  }
  return helper(root, 0);
};

export default isValid;
