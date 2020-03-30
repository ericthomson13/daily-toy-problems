import removeDuplicateNums from '../problems/removeDuplicateNums';

describe('removeDuplicateNums Tests', () => {

  test('It returns the expected length of an array where no nums were removed', () => {
    expect(removeDuplicateNums([1, 2, 3, 4])).toBe(4);
  });

  test('It returns the expected length of an array where there are duplicate numbers', () => {
    expect(removeDuplicateNums([1, 1, 2, 3, 4])).toBe(4);
  });

  test('It returns 0 when an empty array is input', () => {
    expect(removeDuplicateNums([])).toBe(0);
  });
  // need to add testing to ensure O(1) memory complexity
  
});
