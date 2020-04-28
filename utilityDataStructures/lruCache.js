class Node {
  constructor (val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.size = size;
    this.ptrs = {};
  }

  add (val) {
    if (ptrs[val]) {
      return false;
    }

    const newNode = new Node(val);

    if (!this.head && this.size !== 0) {
      this.head = newNode;
      this.tail = newNode;
      this.ptrs[val] = newNode;
      this.length++;
    } else if (this.size === this.length) {
      const temp = this.tail;
      this.tail = this.tail.prev;
      temp.prev = null;
      delete this.ptrs[val];

      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.ptrs[val] = newNode;
      this.length++;
    }
  }

  get(val) {
    if (!this.ptrs[val]) return false;
    if (this.ptrs[val]) {
      if (this.ptrs[val].prev && this.ptrs[val].next) {
        this.ptrs[val].prev.next = this.ptrs[val].next;
        this.ptrs[val].next.prev = this.ptrs[val].prev;
      } else if (this.tail.val === val) {
        // creates loop
        this.tail.next = this.head;
        this.head.prev = this.tail;

        // changes head to new head
        this.head = this.tail;
        this.tail = this.tail.prev;
        this.head.prev = null;
      }
    }
    return this.ptrs[val];
  }
}