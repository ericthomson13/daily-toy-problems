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

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /*
  Example List structure: 
  ListNode = {
    val: 2,
    next: ListNode { 
      val: 4, 
      next: ListNode { 
        val: 3, next: null 
      } 
    } 
  }
 */
class List {
  constructor() {
    this.head = null;
    this.tail = null;
  };
  push (val) {
    const newNode = new Node(val);
    if (!!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  pop () {
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
      return;
    }
    let current = this.head;
    let temp;
    while (!!current.next) {
      
    }
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const addTwoNumbers = (l1, l2) => {
  // helper function to convert both lists to numbers
  const listToNumber = (list) => {
    // start result as string so can add to front
    let result = [];
    // have current start at beginning of list
    let current = list;
    // loop through list and keep adding node to front of string
    do {
      // add current value to result string
      result.unshift(current.val);
      // move to next node
      current = list.next;
    } while(!!current);
    // return result converted to number
    return parseInt(result.join(''));
  };
  // convert both lists to strings of digits
  let n1 = listToNumber(l1);
  let n2 = listToNumber(l2);
  // return two numbers added together
  return n1 + n2;
};

export default addTwoNumbers;