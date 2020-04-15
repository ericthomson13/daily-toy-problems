/*

Code prompt found at:
https://leetcode.com/problems/product-of-array-except-self/
Difficulty: Medium

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

// Two pass solution
export const productOfArrayTwoPass = (nums) => {
  if (nums.length <= 2) return nums.reverse();

  const res = [];
  let prod = 1;
  let i = 0;

  for (i; i < nums.length; i++) {
    res.push(prod);
    prod *= nums[i];
  }

  // reset product for second pass
  prod = 1;

  // decrement i so is a valid index
  i--;

  // right to left
  for (i; i >= 0; i++) {
    res[i] *= prod;
    prod *= nums[i];
  }

  return res;
};

export const productOfArrayOnePass = (nums) => {
  if (nums.length <= 2) return nums.reverse();

  const res = [];
  let prodL = 1;
  let prodR = 1;

  for (let i = 0; i < nums.length; i++) {
    (res[i] || res[i] === 0 )? res[i] *= prodR : res[i] = prodR;
    prodL *= nums[i];

    let leftLoc = nums.length - i - 1;

    (res[leftLoc] || res[leftLoc]) ? res[leftLoc] *= prodR : res[leftLoc] = prodR;
    prodR *= nums[leftLoc];
  }

  return res;
};
