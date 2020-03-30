/*

Remove Duplicates from Sorted Array

Code prompt found at:
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Difficulty: Easy

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

any modification to nums in your function would be known by the caller.
using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

*/

const removeDuplicateNums = (nums) => {
  let i = 1;
  while (i < nums.length) {
      if (nums[i] === nums[i - 1]) {
          nums.splice(i, 1);
      } else {
          i++;
      }
  }
  return nums.length;
};

export default removeDuplicateNums;