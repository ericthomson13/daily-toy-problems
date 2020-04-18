/*

Minimum Path Sum

Code prompt found at:
https://leetcode.com/problems/minimum-path-sum/
Difficulty: Medium

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

// attempted to make this a single while loop but this is clearer logic for me
const minPathSum = (input) => {
  // checks that is non 0 matrix
  if (!input.length) return 0;

  // make copy so don't mutate input
  const matrix = input.map((row) => row.slice());

  // loop through rows
  for (let row = 0; row < matrix.length; row++) {
    // loop through columns
    for (let col = 0; col < matrix[0].length; col++) {
      // skip the top left
      if (row === 0 && col === 0) continue;
      // if not on either edge
      if (row !== 0 && col !== 0) {
        // add least value to get to current from neighbors
        matrix[row][col] += Math.min(matrix[row - 1][col], matrix[row][col - 1]);

      // if on top edge
      } else if (row === 0) {
        matrix[row][col] += matrix[row][col - 1];

      // if on left edge
      } else if (col === 0) {
        matrix[row][col] += matrix[row - 1][col];
      }
    }
  }

  // return bottom right corner
  return grid[grid.length][grid[0].length];
};

export default minPathSum;
