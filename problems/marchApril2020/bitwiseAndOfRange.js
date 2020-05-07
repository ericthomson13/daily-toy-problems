/*

Bitwise AND of Numbers Range

Code prompt found at:
https://leetcode.com/problems/bitwise-and-of-numbers-range/
Difficulty: Medium

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:
Input: [5,7]
Output: 4

Example 2:
Input: [0,1]
Output: 0

*/

// working on better understanding of bitwise operators but still don't fully understand

const rangeBitwiseAnd = (m, n) => {
  let res = m;

  for (let i = m + 1; i <= n; i++) {
    res = res & i;
    if (res === 0) return 0;
  }

  return res;
}

export default rangeBitwiseAnd;
