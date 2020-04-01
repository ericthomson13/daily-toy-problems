/* 

Code prompt found at:
https://leetcode.com/problems/divide-two-integers/
Difficulty: Medium

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.


Information on how to use bitwise operators:
  1. 1 << 31 equals to -2147483648
  2. a = Math.abs(dividend) may makes a equal to 2147483648, which is out of the range of 32-bits
  3. 2147483648 >> i (0<=i<=31) will be negative numbers
  so we need to do two things:
  1. add Math.abs() below to get positive numbers as we would expect;
  2. the second edge case above is separated alone because when a === 1 << 31 and b  === 1, 
     the following res will be 1 << 31, too, which will turn into 2147483648 
     after we add a sign in front of it (at the return part), and get a wrong answer.
*/
const divide = (dividend, divisor) => {
  if(dividend === -2147483648 && divisor === -1) return 2147483647;
  if(dividend === -2147483648 && divisor === 1) return dividend;
  let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
  for(let i=31; i>=0; i--){
    if(Math.abs(a >> i) - b >=0){
      res += 1 << i;
      a -= (b << i);
    }
  }
  return (dividend > 0) ^ (divisor > 0) ? -res : res;
};

export default divide;