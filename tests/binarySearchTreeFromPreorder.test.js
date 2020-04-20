import bstFromPreorder, { TreeNode, } from '../problems/binarySearchTreeFromPreorder';

describe('BST From Preorder Testing', () => {

  test('Returns null when input is empty array', () => {
    expect(bstFromPreorder([])).toBe(null);
  });

  test('Returns a Tree from LeetCode Example input', () => {
    expect(bstFromPreorder([8,5,1,7,10,12]) instanceof TreeNode).toBe(true);
  });


})