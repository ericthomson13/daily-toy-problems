import isSub from '../../problems/may2020/isSubsequence';

describe('Is Subsequence Tests', () => {

  test('Returns true when s is empty string', () => {
    expect(isSub('', 'this')).toBe(true);
  });

  test('Returns false when t is greater than s', () => {
    expect(isSub('this is longer', 'than this')).toBe(false);
  });

  test('Returns expected for Leet Code Example 1', () => {
    expect(isSub('abc', 'ahbgdc')).toBe(true);
  });

  test('Returns expected for Leet Code Example 2', () => {
    expect(isSub('axc', 'ahbgdc')).toBe(false);
  });

  test('Returns true when substring', () => {
    expect(isSub('nada', 'Castenada')).toBe(true);
  });

  test('Returns false when not substring', () => {
    expect(isSub('denada', 'Castenada')).toBe(false);
  });
});
