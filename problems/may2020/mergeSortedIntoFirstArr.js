/*

Code prompt found at:
https://leetcode.com/problems/merge-sorted-array/submissions/
Difficulty: Easy

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

const merge = (nums1, m, nums2, n) => {
  // when no values to merge
  if (n === 0) return;

  let i = nums1.length- 1;
  // make m and n pointers to nums in arrays
  n--;
  m--;

  // loop though and merge
  while (i >= 0) {
    if (m >= 0  && n >= 0) {
      nums1[i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    } else if (m >= 0) {
      nums1[i] = nums1[m--];
    } else {
      nums1[i] = nums2[n--];
    }
    i--;
  }

  // no return value because inserting into nums1 in place
};

export default merge;
