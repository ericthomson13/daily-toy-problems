
export class Node {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor () {
    this.first = null;
  }

  insert (val, priority) {
    const newNode = new Node(val, priority);
    if (!this.first || this.first.priority < priority) {
      newNode.next = this.first;
      this.first = newNode;
      return this;
    }

    let current = this.first;

    while (current.next && priority < current.next.priority) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;

    return this;
  }

  remove () {
    if (!this.first) return false;
    const removed = this.first;
    this.first = this.first.next;
    removed.next = null;
    return removed;
  }
};

export default PriorityQueue;
