import BinarySearchTree, { Node } from '../utilityDataStructures/binarySearchTree';

describe('Binary Search Tree Tests', () => {
  let newTree = null;
  beforeEach(() => {
    newTree = new BinarySearchTree();
  });

  test('Initializes with root of null', () => {
    expect(newTree.root).toBe(null);
  });

  test('Root is instance of Node', () => {
    newTree.insert(1);
    expect(newTree.root instanceof Node).toBe(true);
  });

  test('Leaves are instances of Node', () => {
    newTree.insert(1);
    newTree.insert(5);
    expect(newTree.root.right instanceof Node).toBe(true);
  });

  test('Root has a left of null when only 1 value in tree', () => {
    newTree.insert(2);
    expect(newTree.root.left).toBe(null);
  });

  test('Root has a right of null when only 1 value in tree', () => {
    newTree.insert(2);
    expect(newTree.root.right).toBe(null);
  });

  // how to test using strictEqual without testing against instance of exact same Datastructure
  test('Insert returns the expected tree when tree empty before insert', () => {
    expect(newTree.insert(1).root.val).toBe(1);
  });

  test('Insert increments count when same value inserted multiple times', () => {
    newTree.insert(1);
    newTree.insert(1);
    newTree.insert(1);
    expect(newTree.root.count).toBe(3);
  });

  test('Find returns false when no values in tree', () => {
    expect(newTree.find(1)).toBe(false);
  });

  test('Find returns false when value not in tree', () => {
    newTree.insert(3);
    newTree.insert(1);
    expect(newTree.find(2)).toBe(false);
  });

  test('Find returns true when value is in tree', () => {
    newTree.insert(3);
    newTree.insert(1);
    newTree.insert(2);
    expect(newTree.find(2)).toBe(true);
  });

  test('Left node is less than the right node', () => {
    newTree.insert(5);
    newTree.insert(2);
    newTree.insert(6);
    expect(newTree.root.left.val).toBeLessThan(newTree.root.right.val);
  });

  test('Breadth First Search returns the data in expected order', () => {
    newTree.insert(5);
    newTree.insert(3);
    newTree.insert(2);
    newTree.insert(6);
    newTree.insert(8);
    newTree.insert(4);
    newTree.insert(9);
    const expected = [5, 3, 6, 2, 4, 8, 9];
    
    expect(newTree.breadthFirstSearch()).toStrictEqual(expected);
  });

  test('Depth First PreOrder returns the data in expected order', () => {
    newTree.insert(5);
    newTree.insert(3);
    newTree.insert(2);
    newTree.insert(6);
    newTree.insert(8);
    newTree.insert(4);
    newTree.insert(9);
    const expected = [5, 3, 2, 4, 6, 8, 9];

    expect(newTree.depthFirstPreorder()).toStrictEqual(expected);
  });

  test('Depth First PostOrder returns the data in expected order', () => {
    newTree.insert(5);
    newTree.insert(3);
    newTree.insert(2);
    newTree.insert(6);
    newTree.insert(8);
    newTree.insert(4);
    newTree.insert(9);
    const expected = [2, 4, 3,  9, 8, 6, 5];
    
    expect(newTree.depthFirstPostOrder()).toStrictEqual(expected);
  });
});
