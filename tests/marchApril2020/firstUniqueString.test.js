import firstUnique from '../../problems/marchApril2020/firstUniqueInString';

describe('First Unique String Tests', () => {

  test('Returns -1 for empty string', () => {
    expect(firstUnique('')).toBe(-1);
  });

  test('Returns -1 when string is all same chars', () => {
    expect(firstUnique('llllllll')).toBe(-1);
  });

  test('Returns expected for Leet Code Example 1', () => {
    expect(firstUnique('leetcode')).toBe(0);
  });

  test('Returns expected for Leet Code Example 2', () => {
    expect(firstUnique('loveleetcode')).toBe(2);
  });

  test('Returns expected for example', () => {
    expect(firstUnique('this is a big long string')).toBe(1);
  });
});
