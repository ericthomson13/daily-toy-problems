/*

Last Stone Weight

Code prompt found at:
https://leetcode.com/problems/last-stone-weight/
Difficulty: Easy

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)



Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


Constraints:

1 <= stones.length <= 30
1 <= stones[i] <= 1000

*/
import PriorityQueue from '../../utilityDataStructures/priorityQueue';

// Naiive solution
export const lastStoneWeight = (stones) => {
  if (!Array.isArray(stones)) return 'invalid input';

  if (!stones.length) return 0;
  if (stones.length === 1) return stones[0];

  stones.sort((a, b) => a > b ? 1 : -1);

  const first = stones.pop();
  const second = stones.pop();

  if (first !== second) stones.push(first - second);

  return lastStoneWeight(stones);
};

// Priority Queue Solution
export const queueLastStoneWeight = (stones) => {
  if (!Array.isArray(stones)) return 'invalid input';
  if (!stones.length || stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  const queue = new PriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    queue.insert(stones[i], stones[i]);
  }

  while (!!queue.first.next) {
    let first = queue.remove().val;
    let second = queue.remove().val;
    if (first !== second) {
      let diff = first - second;
      queue.insert(diff, diff);
    }
  }

  return queue.first.val;
};