/*
Code Prompt found at:
https://leetcode.com/problems/two-sum/
Difficulty: Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

export const twoSum = (nums, target) => {
  if (nums.length < 2) return 'invalid nums input';
  if (typeof target !== 'number') return 'target value invalid';
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

// Below is O(n) solution

export const twoSumO1 = function(nums, target) {
  if (nums.length < 2) return 'invalid nums input';
  if (typeof target !== 'number') return 'target value invalid';
  const comp = {};
  for(let i=0; i<nums.length; i++){
    if(comp[nums[i]] >= 0) {
      return [ comp[nums[i] ] , i]
    }
    comp[target-nums[i]] = i
  }
};
