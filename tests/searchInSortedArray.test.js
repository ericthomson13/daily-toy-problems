import search from '../problems/searchInRotatedSortedArray';

describe('Search in Sorted Array Tests', () => {

  test('Returns 0 for an array with only [1] and target of 1', () => {
    expect(search([1], 1)).toBe(0);
  });

  test('Returns -1 when given empty array', () => {
    expect(search([], 8)).toBe(-1);
  });

  test('Returns the expected output for the LeetCode Example 1', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
  });

  test('Returns the expected output for Leet Code Example 2', () => {
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
  });

})