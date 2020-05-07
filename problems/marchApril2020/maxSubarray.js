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

  What a Dynamic Programming Approach is:
  https://www.codechef.com/wiki/tutorial-dynamic-programming
  https://en.wikipedia.org/wiki/Dynamic_programming
  https://www.tutorialspoint.com/dynamic-programming-in-javascript
  https://afshinm.name/2018/06/24/why-kadane-algorithm-works/
*/


// difference between without and with filter/reduce option on leetcode was 60ms v 68ms

// TODO: separate with and without filter/reduce and test with small and large arrays

const maxSubarray = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.filter((num) => num > 0).length === nums.length) {
      return nums.reduce((a, b) => a + b, 0);
  }  
  let max = nums[0];
  const loc = Array(nums.length);
  loc[0] = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      loc[i] = nums[i] + Math.max(0, loc[i -1]);
      max = Math.max(loc[i], max);
  }
  return max;
};

export default maxSubarray;
