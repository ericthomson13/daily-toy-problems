/*

Code prompt found at:
https://leetcode.com/problems/find-the-town-judge/
Difficulty: Easy

In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

Example 1:
Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3

*/

const findJudge = (N, trust) => {
  if (N ===1 ) return N;
  if (trust.length < N - 1) return -1;

  const given = {};
  const received = {};

  for (let [num, trusts] of trust) {
    if (num in given) {
      given[num]++;
    } else {
      given[num] = 1;
    }
    if (trusts in received) {
      received[trusts]++;
    } else {
      received[trusts] = 1;
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!given[i] && received[i] === N - 1) return i;
  }

  return -1;
};

export default findJudge;
