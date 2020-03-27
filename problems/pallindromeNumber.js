/* 

Prompt found at:
https://leetcode.com/problems/palindrome-number/
Difficulty: Easy

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Extra Credit:

Solve it without converting the integer to a string?

*/

const pallindromeNumber = (num) => {
  if (num === 0) return true;
  if (num % 10 === 0) return false;
  if (typeof num !== 'number' || num < 0) return false;
  num = num.toString();
  const reversed = num.split('').reverse().join('');
  return num === reversed ? true : false;
};

export default pallindromeNumber;
