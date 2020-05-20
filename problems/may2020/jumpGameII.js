/*

Code prompt found at:
https://leetcode.com/problems/jump-game-ii/
Difficulty: Hard

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

*/

//Naiive approach
/**
 * @param {number[]} nums
 * @return {number}
*/

const jump = function(nums) {
  if (nums == null || !nums.length) return false;

  let jumps = 0;
  let oldMax = 0;
  let newMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      newMax = Math.max(newMax, i + nums[i]);
      if (i === oldMax) {
          jumps++;
          oldMax = newMax;
      }
  }

  return jumps;
};