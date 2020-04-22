/*

Subarray Sum Equals K

Code prompt found at:
https://leetcode.com/problems/subarray-sum-equals-k/
Difficulty: Medium

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

const subarraySum = (nums, k) => {
  // initialize with 0:1 so when sum - k = 0 adds 1 to res
  const seen = { 0:1 };
  let sum = 0;
  let res = 0;

  for (let num of nums) {
    sum += num;
    res += seen[sum - k] || 0;

    seen[sum] = (seen[sum] || 0) + 1;
  }

  return res;
}