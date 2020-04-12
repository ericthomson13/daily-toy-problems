
class Node {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor () {
    this.heap = [null];
  }

  insert (val, priority) {
    const newNode = new Node(val, priority);
    this.heap.push(newNode);

    let iCurrentNode = this.heap.length - 1;
    let iCurrentParent = Math.floor(iCurrentNode / 2);

    while (this.heap[iCurrentParent] && newNode.priority > this.heap[iCurrentParent].priority) {
      const parent = this.heap[iCurrentParent];
      this.heap[iCurrentParent] = newNode;
      this.heap[iCurrentNode] = parent;

      iCurrentNode = iCurrentParent;
      iCurrentParent = Math.floor(iCurrentNode / 2);
    }

    return this;
  }

  remove () {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }

    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();

    let iCurrent = 1;

    let [left, right] = [(2 * currentI), (2 * currentI + 1)];
    let iCurrentChild = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;

    while (this.heap[iCurrent] && this.heap[iCurrent].priority <= this.heap[iCurrentChild].priority)  {
      let currentNode = this.heap[iCurrent];
      let currentChildNode = this.heap[iCurrentChild];
      this.heap[iCurrentChild] = currentNode;
      this.heap[iCurrent] = currentChildNode;
    }
    return toRemove;
  }
};

export default PriorityQueue;
