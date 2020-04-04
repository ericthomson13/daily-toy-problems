/*
  Prompt found at:

  https://leetcode.com/problems/merge-two-sorted-lists/submissions/
  Difficulty: Easy
  
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  Example:

  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
  
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

 */

import SinglyLinkedList from "../utilityDataStructures/singleLinkedList";

const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  const merged = new SinglyLinkedList();

  while (l1.length !== 0 && l2.length !== 0) {
    if (l1.head.val <= l2.head.val) {
      merged.push(l1.head.val);
      l1.shift();
    } else {
      merged.push(l2.head.val);
      l2.shift();
    }
  }

  if (l1.length !== 0) {
    while (l1.length > 0) {
      merged.push(l1.head.val);
      l1.shift();
    }
  }
  
  if (l2.length !== 0) {
    merged.push(l2.head.val);
    l2.shift();
  }

  return merged;
};

export default mergeTwoLists;
