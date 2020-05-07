/*

Code prompt found at:
https://leetcode.com/problems/merge-intervals/submissions/
Difficulty: Medium

Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Example 3:
Input: [[1, 4], [0, 4]]
Output: [[0, 4]]

Example 4:
Input: [[1,4],[0,0]]
Output: [[0,0],[1,4]]
*/

// TODO: get working with Example 4

const merge = (intervals) => {
  let i = 0;
  let j = 1;

  while (i < intervals.length - 1 && j < intervals.length) {
    if (intervals[i][1] >= intervals[j][0]) {
      let min = Math.min(intervals[i][0], intervals[j][0]);
      let max = Math.max(intervals[i][1], intervals[j][1]);
      intervals[i] = [min, max];
      intervals.splice(j, 1);
    } else {
      j++;
      i++;
    }
  }

  return intervals;
};

export default merge;
