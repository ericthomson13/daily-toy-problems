class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

export default class SinglyLinkedList {
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