/*

Code prompt found at:
https://leetcode.com/problems/reverse-linked-list-ii/
Difficulty: Medium

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  // if no sublist return list
  if (m === n) return head;

  // tracker for pointer position
  let pos = 0;
  // tracker for current node
  let current = head;
  // node before sublist head
  let nodeBeforeHead = null;
  // node that is sublisthead
  let sublistHead = null;
  // node that is sublistTail
  let sublistTail = null;

  // iterate through to find sublistHead and tail
  while(pos <= n) {
      // if not near sublist
      if (pos < m - 1) {
          current = current.next;
          pos++;
      }
      // if node before sublist starts
      if (pos === m - 1) {
          nodeBeforeHead = current;
          current = current.next;
          pos++;
      }
      // if start of sublist
      if (pos === m) {
          sublistHead = current;
          current = current.next;
          pos++;
      }
      // if in sublist
      if (pos >= m && pos < n) {
          current = current.next;
          pos++;
      }
      // if end of sublist
      if (pos === n) {
          sublistTail = current;
          // makes pos greater than n to break loop
          pos++;
      }
  }

  // track end of sublist
  let nodeAfterTail = sublistTail.next;

  // set current to sublistHead
  current = sublistHead;
  // previous to track what to point to
  let previous = nodeBeforeHead;
  // old next of reversed node
  let nextReverse = current.next;

  // reverse sublist

  // ****************** error probably in this loop getting pointers to work properly to reverse
  while(pos > m) {
      nextReverse = current.next;
      current.next = previous;
      previous = current;
      current = nextReverse;
      pos--;
  }
  // make sublistHead point to node after old tail
  sublistHead.next = nodeAfterTail;

  return head;
};