/*

Code Prompt Found at:
https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/
Difficulty: Easy, presumed because day 1 of LeetCode 30 Day Challenge

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

export const singleNumberOne = (nums) => {
  const vals = {};
  for (let i = 0; i < nums.length; i++) {
      if (!vals[nums[i]]) {
          vals[nums[i]] = true;
      } else {
          vals[nums[i]] = false;
      }
  }
 let result = null;
 for (let key in vals) {
     if (vals[key] === true) result = key;
 }
 return result;
}

export const singleNumberTwo = (nums) => {
  return nums.filter((num) => nums.indexOf(num) == nums.lastIndexOf(num))[0];
};

