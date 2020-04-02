class Node {
  construtor (val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}
  
class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if(this.length === 0) {
      return undefined;
    }
    var poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.previous = this.tail
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  shift () {
    if(this.length === 0) {
      return undefined;
    }
    var shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next = this.head;
      this.head.previous = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift (val) {
    const newNode = new Node(val);
    if (this.length === 0) {
     this.head = newNode;
     this.tail = newNode;
    } else {
     this.head.previous = newNode;
     newNode.next = this.head;
     this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index) {
    // refactor to go from head or tail whichever is more efficient***************
    let counter = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    }
    return current;
  }

  set (index, val) {
    // refactor to use GET*******************
    let counter = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      while (counter !== index) {
        current = current.next;
        counter++
      }
    }
    current.val = val;
    return true;
  }

  insert (index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let newNode = new Node (val);
    let beforeNode = this.get(index -1);
    let afterNode = beforeNode.next;
    newNode.next = afterNode;
    afterNode.previous = newNode;
    beforeNode.next = newNode;
    newNode.previous = beforeNode;
    this.length++;
    return true;
  }

  remove (index) {
    if (this.length === 0) {
      return false;
    }
    if (this.length === index - 1) {
      this.pop();
    }
    if (index === 0) {
      this.shift();
    }
    let removed = this.get(index);
    let beforeNode = removed.previous;
    let afterNode = removed.next;
    beforeNode.next = afterNode;
    afterNode.previous = beforeNode;
    removed.next = null;
    removed.previous = null;
    length--;
    return current;
  }
};

export default DoublyLinkedList;
