/*

Code prompt found at:
https://leetcode.com/problems/maximum-subarray/
Difficulty: Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Resources:

  https://en.wikipedia.org/wiki/Maximum_subarray_problem
  
  Kadane's Algorithm:
  https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6

*/

const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  const loc = Array(nums.length);
  loc[0] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    loc[i] = nums[i] + Math.max(0, loc[i -1]);
    max = Math.max(loc[i], max);
  }   
  return max;
};

export default maxSubArray;
