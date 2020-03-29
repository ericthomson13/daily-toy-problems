class Node {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift () {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift (val){
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }    

  set (val, index) {
    let foundNode = this.get(index);
    if(foundNode) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove (index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1)
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse () {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }

  // added for easier testing of lists, converts values to array in order
  traverseValues () {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }
}

export default SinglyLinkedList;
