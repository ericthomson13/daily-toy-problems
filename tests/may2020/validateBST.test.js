import validateBST from '../../problems/may2020/validateBST';

describe('Validate Binary Search Tree Test', () => {

  test('Returns true when root is null', () => {
    expect(validateBST(null)).toBe(true);
  });

  test('Returns true when given a root with no left or right nodes', () => {
    expect(validateBST({ val: 0, left: null, right: null})).toBe(true);
  });

  test('Returns true for LeetCode Example 1', () => {
    const input = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      }
    }
    expect(validateBST(input)).toBe(true);
  });

  test('Returns false for Leet Code Example 2', () => {
    const input = {
      val: 5,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        }
      }
    }

    expect(validateBST(input)).toBe(false);
  });
});
