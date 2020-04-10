/* 

Min Stack

Code prompt found at:
https://leetcode.com/problems/min-stack/
Difficulty: Easy

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.


Note: LeetCode was set up for PseudoClassical Instantiation so followed suit.
*/

const minStack = function () {
  this.stack = [];
};

minStack.prototype.push = function (val) {
  if (typeof val !== 'number') return false;
  const current = this.stack.length ? this.getMin() : val;
  this.stack.push({ min: Math.min(current, val), val });
  return true;
};

minStack.prototype.pop = function () {
  if (!this.stack.length) return false;
  const popped = this.stack.pop();
  return popped.val;
};

minStack.prototype.top = function () {
  const top = this._getLast();
  return top ? top.val : null;
};

minStack.prototype.getMin = function () {
  const min = this._getLast();
  return min ? min.min : null;
};

// This added to DRY out top and getMin
minStack.prototype._getLast = function () {
  return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

export default minStack;
