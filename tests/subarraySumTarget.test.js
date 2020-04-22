import subarraySum from '../problems/subarraySumTarget';

describe('Subarray Sum Test', () => {

  test('Returns 0 when given empty array', () => {
    expect(subarraySum([], 0)).toBe(0);
  });

  test('Returns 0 when no subarrays add to target', () => {
    expect(subarraySum([0, 0, 1, 2, 0, 4,], 8)).toBe(0);
  });

  test('Returns the expected count when subarrays add to target', () => {
    expect(subarraySum([5, 4, 1, 3, 2, 1], 5)).toBe(3);
  });

  test('Returns expected count for LeetCode Example', () => {
    expect(subarraySum([1,1,1], 2)).toBe(2);
  });

});
