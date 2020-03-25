/*
Code Prompt found at:
https://leetcode.com/problems/two-sum/
Difficulty: Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = (nums, target) => {
  // handle edge case if nums is invalid input
  if (nums.length < 2) return 'invalid nums input';
  if (typeof target !== 'number') return 'target value invalid';
  // iterate through starting from start
  for (let i = 0; i < nums.length; i++) {
    // iterate through starting one index after i
    for (let j = i + 1; j < nums.length; j++) {
      // check to see if nums add up to target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // return false if target not found
  return 'one of the inputs was invalid';
};

/* 
time complexity could be improved by finding a single loop over the nested for loops
*/

export default twoSum;