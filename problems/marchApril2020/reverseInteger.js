/*

Prompt found at:
  https://leetcode.com/problems/reverse-integer/
  Difficultly: Easy

  Given a 32-bit signed integer, reverse digits of an integer.

  Note:
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const reverseInteger = function(x) {
  let val = Math.abs(x);
  val = val.toString().split('').reverse().join('')
  val = parseInt(val, 10);
  if (val > 2147483648) return 0;
  return x < 0 ? -val : val;
};

export default reverseInteger;
