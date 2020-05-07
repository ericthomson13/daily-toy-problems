/*

Number of Islands

Code prompt found at:
https://leetcode.com/problems/number-of-islands/
Difficulty: Medium

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

// This solution mutates the input array which is lower space complexity but not always best practice

const numIslands = (grid) => {
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (land(grid, j, i)) {
        islands++;
        surrounding(grid, j, i);
      }
    }
  }
  
  // could allow for traversal of matrix to cleanup to original grid here

  return islands;
};

// helper functions
const land = (g, x, y) => {
  return g[y] && g[y][x] && g[y][x] === '1';
};

const visited = (g, x, y) => {
  g[y][x] = '2';
};

const surrounding = (g, x, y) => {
  if (land(g, x, y)) {
    visited(g, x, y);

    const dirs = [[x, y - 1], [x, y + 1], [x + 1, y], [x - 1, y]];
    dirs.forEach((dir) => surrounding(grid, ...dir));
  }
}
export default numIslands;
