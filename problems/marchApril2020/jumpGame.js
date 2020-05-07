/*

Jump Game

Code prompt found at:
https://leetcode.com/problems/jump-game/
Difficulty: Medium

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

*/

// this times out in Leet Code Testing
export const bruteForceJumpGame = (nums) => {
  let res = false;

  const jump = (i) => {
    if (i >= nums.length - 1) {
      res = true;
      return;
    }

    for (let j = 1; j <= nums[i]; j++) {
      jump(i + j);
    }
  }

  jump(0);

  return res;
}

export const canJumpDPBottom = (nums) => {
  let target = nums.length - 1;

  for (let i = target; i >= 0; i--) {
    if (i + nums[i] >= target) target = i;
  }

  return target === 0;
};
