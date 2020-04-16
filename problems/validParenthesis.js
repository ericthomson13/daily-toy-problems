/*
Valid Parenthesis String

Code prompt found at:
https://leetcode.com/problems/valid-parenthesis-string/
Difficulty: Medium

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].

*/

// Brute Force Solution with ~O(3^N)
export const validParenthesisForce = (s) => {
  if (s === '') return true;
  let isValid = false;
    
  const checkValid = (lefts, string) => {
      if (isValid) return;
      
      if (!string.length) {
          isValid = !lefts;
          return;
      }
      
      const [char, remain] = [string[0], string.slice(1)];
      
      if (char === '(') {
          checkValid(lefts + 1, remain);
      } else if (char === ')') {
          if (lefts > 0) {
              checkValid(lefts - 1, remain);
          }
      } else if (char === '*') {
          checkValid(lefts, '(' + remain);
          checkValid(lefts, ')' + remain);
          checkValid(lefts, remain);
      }
  }
  
  checkValid(0, s);
  
  return isValid;
};

// Less thuggy of a solution

export const validParenthesisMath = (s) => {
  let left = 0, 
  right = 0,
  star = 0,
  maybeLeft = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      left++;
    } else if (s[i] === ')') {
      right++
    } else if (s[i] === '*') {
      star++;
    }

    if (right > left + star + maybeLeft) return false;
    if ((left === right && star > 0) || (right + star > left)) {
      maybeLeft++;
      star--;
    }
  }

  if (left > right + star) return false;
  if (right > left + star + maybeLeft) return false;
  
  return true;
};
