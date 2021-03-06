/*

Code prompt found at:
https://leetcode.com/problems/move-zeroes/
Difficulty: Easy

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

const moveZeros = (nums) => {
  if (!Array.isArray(nums)) return 'invalid input';
  if (nums.length === 0) return null;

  let end = nums.length;
  let i = 0;

  while (i < end) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      end--;
    } else {
      i++;
    }
  }
  
  return nums;
};

export default moveZeros;
