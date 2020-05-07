/*

Code prompt found at:
https://leetcode.com/problems/add-two-numbers/
Difficulty: Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
*/

import SinglyLinkedList from '../../utilityDataStructures/singleLinkedList';

// key to this problem is to start at the beginning of each list and carry the overflow up

const addTwoNumbers = (l1, l2) => {
  if (!l1 && !l2) return 0;
  if (typeof l1 !== 'object' || typeof l2 !== 'object') return 'please enter valid inputs';
  if (Array.isArray(l1) || Array.isArray(l2)) return 'please enter valid inputs';
  if (!l1) return l2;
  if (!l2) return l1;
  const List = new SinglyLinkedList;
  let sum = 0, carry = 0;
  while (!!l1.head || !!l2.head || sum > 0) {
    if (!!l1.head) {
      sum += l1.head.val;
      l1.shift();
    }
    if (!!l2.head) {
      sum += l2.head.val;
      l2.shift();
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    List.push(sum);
    sum = carry;
    carry = 0;
  }
  return List.length === 0 ? 0 : List;
};

export default addTwoNumbers;