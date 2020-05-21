import eraseOverlap from '../../problems/may2020/nonOverlappingIntervals';

describe('Non Overlapping Intervals Tests', () => {

  test('Returns 0 when intervals has no length', () => {
    expect(eraseOverlap([])).toBe(0);
  });

  test('Returns 0 when only one interval', () => {
    expect(eraseOverlap([[1, 2]])).toBe(0);
  });

  test('Returns expected output for Leet Code Example 1', () => {
    const input = [[1,2],[2,3],[3,4],[1,3]];

    expect(eraseOverlap(input)).toBe(1);
  });

  test('Returns expected output for LeetCode Example 2', () => {
    const input = [[1,2],[1,2],[1,2]];

    expect(eraseOverlap(input)).toBe(2);
  });

  test('Returns expected output for Leet Code Exampel 3', () => {
    const input = [[1,2],[2,3]];

    expect(eraseOverlap(input)).toBe(0);
  });

  test('Returns expected output when one interval overlaps all others', () => {
    const input = [[1,100],[11,22],[1,11],[2,12]];

    expect(eraseOverlap(input)).toBe(2);
  });
});