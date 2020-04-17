class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push (val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.last;
      this.last = newNode;
      this.last.next = temp;
      this.size++;
    }
  }

  pop () {
    if (!this.first) {
      return null;
    }
    let popped = this.last;
    if (this.first === this.last) {
      this.last = null;
    }
    if (this.last.next) {
      this.last = this.last.next
    } else {
      this.last = null
      this.first = null;
    }
    
    this.size--;
    return popped.val;
  }
};

export default Stack;
