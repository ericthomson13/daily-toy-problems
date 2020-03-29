/*
  Prompt found at:

  https://leetcode.com/problems/merge-two-sorted-lists/submissions/

  Difficulty:
    Easy
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import SinglyLinkedList from "../utilityDataStructures/singleLinkedList";

const mergeTwoLists = (l1, l2) => {
  const merged = new SinglyLinkedList;
  if (l1.head.val > l2.head.val) {
    merged.push(l1.head.val);
    l1.shift();
  } else {
    merged.push(l2.head.val);
    l2.shift();
  }

  while (l1.length !== 0 && l2.length !== 0) {
    if (l1.head.val <= l2.head.val) {
      merged.push(l1.head.val)
      l1.shift();
    } else {
      merged.push(l2.head.val)
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
