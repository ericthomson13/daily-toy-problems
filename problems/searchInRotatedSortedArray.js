/*

Search in Rotated Sorted Array

Code prompt found at:
https://leetcode.com/problems/search-in-rotated-sorted-array/
Difficulty: Medium

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

const search = (nums, target) => {
  if (nums.length < 2) return nums[0] === target ? 0 : -1;

  let left = 0;
  let right = nums.length - 1;
  let pivot = Math.floor(right / 2);

  while (left < right) {
    if (nums[left] <= nums[pivot]) {
      if (nums[left] <= target && target <= nums[pivot]) {
        right = pivot;
      } else {
        left = pivot + 1;
      }
    } else {
      if (nums[pivot] < target && target < nums[right]) {
        left = pivot + 1;
      } else {
        right = pivot;
      }
    }
    pivot = Math.floor((right + left) / 2);
    if (nums[pivot] === target) return pivot;
  }
  return -1;
};

export default search;
