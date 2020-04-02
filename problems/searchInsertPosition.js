/*

Search Insert Position

Code prompt found at:

Difficulty: Easy

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

*/

const searchInsertPosition = (nums, target) => {
  if (!Array.isArray(nums) || typeof target !== 'number') return 'invalid input';
  if(nums.length === 0) return 0;
  if (nums[0] > target) return 0;
  let index = nums.indexOf(target);
  if (index > -1) return index;
  index = 0;
  let current, next;
  while(index < nums.length - 1) {
      current = nums[index];
      next = nums[index + 1];
      if(current < target && next > target) {
          return index + 1;
      }
      index++;
  }
  return nums.length;
};

export default searchInsertPosition;
