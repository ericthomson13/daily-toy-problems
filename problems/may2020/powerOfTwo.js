/*

Code prompt found at:
https://leetcode.com/problems/power-of-two/
Difficulty: Easy

Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true
Explanation: 20 = 1

Example 2:
Input: 16
Output: true
Explanation: 24 = 16

Example 3:
Input: 218
Output: false

*/

// using bitwise operators
export const powerOfTwoBit = (n) => n <= 0 ? false : (n&=(n - 1)) === 0;

// using log2 not bitwise
export const powerOfTwoLog = (n) => Math.log2(n) % 1 === 0;
