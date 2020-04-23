import rangeBitwiseAnd from '../problems/bitwiseAndOfRange';

describe('Bitwise And of Range Tests', () => {

  test('Returns expected output for Leet Code Example 1', () => {
    expect(rangeBitwiseAnd(5, 7)).toBe(4);
  });

  test('Returns expected output for Leet Code Example 2', () => {
    expect(rangeBitwiseAnd(0, 1)).toBe(0);
  });

});