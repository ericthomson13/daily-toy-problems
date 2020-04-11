class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert (val) {
    const newNode = new Node(val);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      // Make sure every case breaks out otherwise infinite loop
      while (true) {
        if (val === current.val) {
          current.count++;
          return this;
        }
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find (val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch () {
    const data = [];
    const queue = [];
    let node;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  // Looks at branch while moves towards leaves
  depthFirstPreorder () {
    const data = [];
    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // Might need breakout case added
    };

    traverse(this.root);
    return data;
  }

  // Looks at leaves before branches
  depthFirstPostOrder () {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      // Mihgt need breakout case added
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  depthFirstInOrder () {
    const data = [];
    const inOrder = (node) => {
      data.push(node.val);
      if (node.left) inOrder(node.left);
      if (node.right) inOrder(node.right);
    }
    return data;
  }
};

export default BinarySearchTree;
