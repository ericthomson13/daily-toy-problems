/*

Code prompt found at:
https://leetcode.com/problems/count-primes/submissions/
Difficulty: Easy

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

// below doesn't run fast enough for LeetCode testing timeout with n = 499979
const countPrimes = (n) => {
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (i % 2 && i !== 2) continue;

    for (let j = 0; j <= primes.length; j++) {
      if (j === primes.length) primes.push(i);

      if (i % primes[j] === 0) break;
    }
  }

  return primes.length;
}