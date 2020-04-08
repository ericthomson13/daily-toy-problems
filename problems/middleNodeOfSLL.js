/* 

Code prompt found at:

Difficulty: Easy

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:
** The number of nodes in the given list will be between 1 and 100.
** Will not use the get or length properties of the SinglyLinkedList Class to solve.  Looks for the rest of the list after the node.
  Can check for time between the two with large lists after.

*/

export const middleNode = (list) => {
  let slow = list.head;
  let fast = list.head;
  let second = false;

  while (fast) {
    fast = fast.next;
    if (second) {
      slow = slow.next;
      second = false;
    } else {
      second = true;
    }
  }
  return slow;
};

export const middleNodeUsingLength = (list) => {
  let index = Math.ceil(list.length / 2);
  return list.get(index);
};
