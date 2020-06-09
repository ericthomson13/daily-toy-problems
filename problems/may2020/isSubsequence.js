/*

Code prompt found at:
https://leetcode.com/problems/is-subsequence/
Difficulty: Easy

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:

0 <= s.length <= 100
0 <= t.length <= 10^4
Both strings consists only of lowercase characters.
*/


const isSub = (s, t) => {
  if (!s) return true;
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;
  let res = '';

  while (j < t.length) {
    if (s[i] === t[j]) {
      res += s[i];
      i++;
    }

    j++;
  }

  return s === res;
};

export default isSub;
