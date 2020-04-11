import diameterOfBinaryTree from '../problems/diameterOfBinaryTree';
import { emptyTree, smallTree, largerTree, } from '../testsData/diameterOfBinaryTreeData';
import { notObject, } from '../testsData/notTypeOfData';

const notBST = [ ...notObject, {}];

describe('Diameter of Binary Tree Tests', () => {

  test.each(notBST)(`Returns 'input must be a tree' when input not an instance of BST`, (i) => {
    expect(diameterOfBinaryTree(i)).toBe('input must be a tree');
  });

  test('Returns 0 when no nodes in tree', () => {
    expect(diameterOfBinaryTree(emptyTree)).toBe(0);
  });

  test('Returns expected value for a small tree', () => {
    expect(diameterOfBinaryTree(smallTree)).toBe(2);
  });

  test('Returns expected output for a larger tree', () => {
    expect(diameterOfBinaryTree(largerTree)).toBe(5);
  });
});
