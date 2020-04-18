const Node = require('./particle');

module.exports = class {
  constructor() {
    this.root = null;
    this.content = [];
  }


  insertNode(node, value) {
    console.log('insert ', value, ' into ', node)
    if (node == null) {
      return new Node(value);
    }
    if (value < node.value) {
      console.log('Go to left')
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      console.log('Go to right')
      node.right = this.insertNode(node.right, value);
    }

    // Check red-black cases

    // Case 1: Right is Red && (Left is Black || Left is Null)
    if (this.constructor.checkRedColor(node.right) && !this.constructor.checkRedColor(node.left)) {
      node = this.constructor.leftRotate(node);
      this.constructor.swapColors(node, node.left);
    }

    // Case 2: Left is Red && Left child is Red
    if (this.constructor.checkRedColor(node.left) && this.constructor.checkRedColor(node.left.left)) {
      node = this.constructor.rightRotate(node);
      this.constructor.swapColors(node, node.right);
    }

    // Case 3: Left is Red && Right is Red
    if (this.constructor.checkRedColor(node.left) && this.constructor.checkRedColor(node.right)) {
      console.log('Color swap ', node);
      node.isRed = !node.isRed;
      node.left.isRed = false;
      node.right.isRed = false;
    }

    return node;
  }


  static leftRotate(node) {
    console.log('Left rotation', 'Node: ', node);
    let child = node.right;
    const childLeft = child.left;
    child.left = node;
    node.right = childLeft;
    return child;
  }

  static rightRotate(node) {
    console.log('Right rotation', 'Node: ', node);
    let child = node.left;
    const childRight = child.right;
    child.right = node;
    node.left = childRight;
    return child;
  }

  static checkRedColor(node) {
    if (node == null)
      return false;
    return (node.isRed);
  }

  static swapColors(node1, node2) {
    let tmpColor = node1.isRed;
    node1.isRed = node2.isRed;
    node2.isRed = tmpColor;
  }

  getContent(node) {
    if (node != null) {
      this.getContent(node.left);
      this.content.push(node.value);
      this.getContent(node.right);
    }
    return this.content;
  }

}