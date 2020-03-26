class Node {
  constructor (value){
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } 
    let dequeued = this.first;
    if (this.first === this.last) {
      this.last = null;
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return dequeued.value;
  }
};

export default Queue;
