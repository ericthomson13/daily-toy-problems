/*

Code prompt found at:
https://leetcode.com/problems/contiguous-array/
Difficulty: Medium

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000.

Prefix Sum Explanation: 
https://en.wikipedia.org/wiki/Prefix_sum

*/

const findMaxLength = (nums) => {
  if (!Array.isArray(nums)) return 'input must be an array';
  const binaryCheck = nums.filter((num) => num > 1 || num < 0 || typeof num !== 'number');
  if (binaryCheck.length > 0) return 'input must be a binary array';
  if (nums.length < 2) return 0;

  let result = 0;
  // if 0 then will be full length of array at max calculation below
  const log = { 0: -1 };
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    diff += current === 1 ? 1 : -1;

    // could coerce booleans here instead of loosely equal
    if (log[diff] == undefined) {
      log[diff] = i;
      // still counting, so don't need to check for max
      continue;
    }
    result = Math.max(result, i - log[diff]);
  }

  return result;
};

export default findMaxLength;
