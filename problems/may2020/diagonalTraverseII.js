/*

Code prompt found at:
https://leetcode.com/problems/diagonal-traverse-ii/
Difficulty: Medium

Given a list of lists of integers, nums, return all elements of nums in diagonal order as shown in the below images.


Example 1:



Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]
Example 2:



Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
Example 3:

Input: nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
Output: [1,4,2,5,3,8,6,9,7,10,11]
Example 4:

Input: nums = [[1,2,3,4,5,6]]
Output: [1,2,3,4,5,6]


Constraints:

1 <= nums.length <= 10^5
1 <= nums[i].length <= 10^5
1 <= nums[i][j] <= 10^9
There at most 10^5 elements in nums.

*/


// hangs when testing need to figure out where (likely in while loop)
const  findDiagonalOrder = (nums) => {
  const result = [];

  // set max for row and col
  const maxRow = nums.length - 1;
  const maxCol = nums[0].length - 1;
  // start in bottom right corner
  let col = maxCol;
  let row  = maxRow;

  // iterate through matrix
  while (row >= 0 && col >= 0) {
      // current if exists or null
      console.log('col: ', col, ' row: ', row);
      const cur = nums[row][col] ? nums[row][col] : null;
      // if exists add it to front of result
      if (cur) result.unshift(cur);
      // if upper row limit
      if (row === maxRow && col === maxCol) {
          // bottom right of matrix
          row--;
      } else if (row === maxRow) {
          // bottom of matrix, not at bottom right
          row = col;
          col = maxCol;
      } else {
          // when in middle of matrix
          row++;
          col--;
      }

  }

  return result;
};

export default findDiagonalOrder;
