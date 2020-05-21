/*

Code prompt found at:
https://leetcode.com/problems/non-overlapping-intervals/
Difficulty: Medium

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:
Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:
Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

*/

const eraseOverlap = (intervals) => {
  // if empty or only 1 interval
  if (!intervals.length || intervals.length === 1) return 0;

  // sort intervals so ordered by ending integer
  intervals.sort((a, b) => a[1] < b[1] ? -1 : 1);

  // count number not removed
  let counter = 1;
  // max end value to track if overlaps
  let endTracker = intervals[0][1];

  // iterate through intervals
  for (const [start, end] of intervals) {
    // if not overlapping
    if (endTracker <= start) {
      // increase non-overlap count
      counter++;
      // move end
      endTracker = end;
    }
  }

  // return difference of non-overlapping and total
  return intervals.length - counter;
};

export default eraseOverlap;
