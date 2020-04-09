/* 
Backspace String Compare

Code prompt found at:
https://leetcode.com/problems/backspace-string-compare/
Difficulty: Easy


Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

*/

const backspaceCompare = (s, t) => {
  if (!s || !t) return 'invalid input';
  if (typeof s !== 'string' || typeof t !== 'string') return 'invalid input';
  if (s === t) return true;
  const sChars = [];
  const tChars = [];

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (i < s.length) {
      s[i] === '#' ? sChars.pop() : sChars.push(s[i]);
    }
    if (i < t.length) {
      t[i] === '#' ? tChars.pop() : tChars.push(t[i]);
    }
  }
  return sChars.join() === tChars.join();
};

export default backspaceCompare;
