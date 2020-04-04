/*

Merge K Sorted Lists

Code prompt found at:
https://leetcode.com/problems/merge-k-sorted-lists/
Difficulty: Hard

Merge k sorted linked lists and return it as one sorted list.

Example:

  Input:
  [
    1->4->5,
    1->3->4,
    2->6
  ]

  Output: 1->1->2->3->4->4->5->6

Updated to use Singly Linked list from Utility Data Structures rather than linked list used by LeetCode
Used mergeTwoLists as a helper function because exact same code

*/

import mergeTwoLists from './mergeTwoLists';

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  
  let merged = [];
  let l1;
  let l2;
  
  while (lists.length > 1) {

    while (lists.length > 1) {
      l1 = lists.pop();
      l2 = lists.pop();
      merged.push(mergeTwoLists(l1, l2));
    }

    if (lists.length) {
      merged.push(lists.pop());
    }

    lists = merged;
    merged = [];
  }

  return lists[0];
};

export default mergeKLists;
